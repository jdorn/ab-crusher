<template>
  <div>
    <TopNav />
    <div class="test-results">
      <div class="info">
        <h1>{{ test.name }}</h1>
        <p>
          Started:
          {{ test.created_at | moment("MMM Do, YYYY \\a\\t h:mm a") }}
        </p>
        <h3>Variations</h3>
        <div class="screenshots">
          <div
            class="variation"
            v-for="(variation, i) in test.variations"
            :key="i"
          >
            <p>
              <i>{{ variation.name }}</i>
            </p>
            <img :src="variation.images[0].path" />
            <image-upload :test-id="test.id" :variation="i"></image-upload>
          </div>
        </div>
      </div>
      <div class="metrics">
        <div
          class="metric"
          v-for="metric in snapshot.metrics"
          :key="metric.metric.name"
        >
          <h3>{{ metric.metric.name }}</h3>
          <table>
            <thead>
              <tr>
                <th>Variation</th>
                <th>Conversions</th>
                <th>Percent Improvement</th>
                <th>Time Remaining</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(variation, i) in metric.variations" :key="i">
                <td>
                  {{ test.variations[i].name }}
                </td>
                <td>
                  {{ Math.floor(variation.data.value * variation.samples) }} /
                  {{ variation.samples }}
                </td>
                <td>
                  <div class="chart-holder" v-if="i > 0">
                    <div class="red-side"></div>
                    <div class="green-side"></div>
                    <div
                      class="line-holder"
                      :style="{
                        left:
                          (variation.data.confidenceLow / 0.4 + 0.5) * 100 +
                          '%',
                        right:
                          ((0.2 - variation.data.confidenceHigh) / 0.4) * 100 +
                          '%'
                      }"
                    >
                      <div class="line"></div>
                      <div class="marker left"></div>
                      <div class="marker right"></div>
                      <div class="ci low">
                        {{ (variation.data.confidenceLow * 100).toFixed(1) }}%
                      </div>
                      <div class="ci high">
                        {{ (variation.data.confidenceHigh * 100).toFixed(1) }}%
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="progress">
                    <div class="progress-bar" v-if="i > 0">
                      <div
                        class="bar"
                        :style="{
                          width:
                            (variation.samples / variation.requiredSamples) *
                              100 +
                            '%'
                        }"
                      ></div>
                    </div>
                    <div class="estimate" v-if="i > 0">
                      ~{{
                        ((1 / (variation.samples / variation.requiredSamples) -
                          1) *
                          (new Date().getTime() -
                            new Date(test.created_at).getTime()))
                          | duration("humanize")
                      }}
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.test-results {
  text-align: left;
  padding-bottom: 100px;

  .info {
    background: #f2f2f2;
    padding: 10px;

    h3 {
      font-size: 1.4em;
    }
  }
  .screenshots {
    display: flex;
    width: 100%;
    box-sizing: border-box;

    .variation {
      margin: 0 10px;
      text-align: center;
      img {
        width: 100%;
        border: 2px solid #777;
        opacity: 0.6;
        transition: opacity 0.3s;

        &:hover {
          opacity: 0.9;
        }
      }
    }
  }

  .metrics {
    display: flex;
    flex-wrap: wrap;
  }
  .metric {
    padding: 10px;
    margin: 0 10px;
    text-align: left;

    h3 {
      font-size: 1.4em;
      color: #2c3e50;
    }

    table {
      border-spacing: 0;
      border-collapse: collapse;
      margin-left: 20px;

      td,
      th {
        border: 1px solid #f0f0f0;
        padding: 15px;
        margin: 0;

        &.no-padding {
          padding: 0;
        }
      }
      th {
        background: #f5f5f5;
      }
    }

    h4 {
      padding: 0;
      margin: 0 0 10px;
    }

    .chart-holder {
      width: 350px;
      height: 50px;
      position: relative;

      .red-side {
        position: absolute;
        background: #faa;
        top: 0;
        left: 0;
        bottom: 0;
        width: 50%;
      }
      .green-side {
        position: absolute;
        background: #afa;
        top: 0;
        right: 0;
        bottom: 0;
        width: 50%;
      }

      .line-holder {
        position: absolute;
        top: 13px;
        bottom: 10px;

        .line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          background: #000;
          height: 8px;
        }
        .marker {
          position: absolute;
          top: -6px;
          height: 20px;
          width: 4px;
          background: #000;

          &.left {
            left: -2px;
          }
          &.right {
            right: -2px;
          }
        }
        .ci {
          position: absolute;
          top: 16px;
          width: 30px;
          text-align: center;

          &.low {
            left: -15px;
          }
          &.high {
            right: -15px;
          }
        }
      }
    }

    .progress {
      padding-right: 20px;
      text-align: center;
      font-size: 0.9em;

      .progress-bar {
        background: #ddd;
        border-radius: 20px;
        height: 12px;
        width: 200px;
        overflow: hidden;
        margin-bottom: 5px;

        .bar {
          background: #9fccd6;
          height: 100%;
        }
      }
    }
  }
}
</style>

<script>
import TopNav from "../components/TopNav";
import ImageUpload from "../components/ImageUpload";
export default {
  components: {
    ImageUpload,
    TopNav
  },
  data: () => {
    return {
      test: {},
      snapshot: {}
    };
  },
  props: {
    id: String
  },
  mounted() {
    const baseURI = process.env.VUE_APP_API_ENDPOINT + "/test/" + this.id;
    this.$http.get(baseURI).then(result => {
      this.test = result.data;
    });

    this.$http.get(baseURI + "/snapshots").then(result => {
      this.snapshot = result.data[0];
      console.log("snapshot", JSON.parse(JSON.stringify(this.snapshot)));
    });
  }
};
</script>
