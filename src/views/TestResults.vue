<template>
  <div>
    <TopNav />
    <div class="test-results">
      <div class="info">
        <h1>{{ test.name }}</h1>
        <p>
          Started: 11/7/2019
        </p>
        <h3>Variations</h3>
        <div class="screenshots">
          <div class="variation" v-for="(variation, i) in variations" :key="i">
            <img :src="variation.screenshot" />
            <p>
              <i>{{ variation.name }}</i>
            </p>
          </div>
        </div>
      </div>
      <div class="metrics">
        <div class="metric" v-for="metric in metrics" :key="metric.name">
          <h3>{{ metric.name }}</h3>
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
                  {{ variations[i].name }}
                </td>
                <td>
                  {{ variation.conversions }} / {{ variations[i].samples }}
                </td>
                <td>
                  <div class="chart-holder" v-if="i > 0">
                    <div class="red-side"></div>
                    <div class="green-side"></div>
                    <div
                      class="line-holder"
                      :style="{
                        left: (variation.ci[0] / 0.4 + 0.5) * 100 + '%',
                        right: ((0.2 - variation.ci[1]) / 0.4) * 100 + '%'
                      }"
                    >
                      <div class="line"></div>
                      <div class="marker left"></div>
                      <div class="marker right"></div>
                      <div class="ci low">
                        {{ (variation.ci[0] * 100).toFixed(1) }}%
                      </div>
                      <div class="ci high">
                        {{ (variation.ci[1] * 100).toFixed(1) }}%
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
                          width: variation.percentCompleted * 100 + '%'
                        }"
                      ></div>
                    </div>
                    <div class="estimate" v-if="i > 0">
                      {{ variation.remaining }}
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
export default {
  components: {
    TopNav
  },
  data: () => {
    return {
      test: {
        name: "Signup Button Color"
      },
      variations: [
        {
          name: "Baseline",
          samples: 1002,
          screenshot: "/img/screenshots/pricing-button-baseline.png"
        },
        {
          name: "Green Button",
          samples: 1025,
          screenshot: "/img/screenshots/pricing-button-green.png"
        },
        {
          name: "Blue Button",
          samples: 1019,
          screenshot: "/img/screenshots/pricing-button-blue.png"
        }
      ],
      metrics: [
        {
          name: "Clicks",
          variations: [
            {
              conversions: 851
            },
            {
              conversions: 890,
              ci: [-0.03123, 0.08543],
              percentCompleted: 0.8,
              remaining: "~2 hours remaining"
            },
            {
              conversions: 812,
              ci: [-0.08123, 0.01543],
              percentCompleted: 0.9,
              remaining: "~1 hour remaining"
            }
          ]
        },

        {
          name: "Purchases",
          variations: [
            {
              conversions: 105
            },
            {
              conversions: 120,
              ci: [-0.11123, 0.13543],
              percentCompleted: 0.4,
              remaining: "~3 days remaining"
            },
            {
              conversions: 140,
              ci: [-0.06123, 0.18543],
              percentCompleted: 0.5,
              remaining: "~2.5 days remaining"
            }
          ]
        }
      ]
    };
  }
};
</script>
