<template>
  <div class="test-results">
    <h1>
      Results for <span>{{ id }}</span>
    </h1>
    <div class="charts-main">
      <div class="chart">
        <h2>Buyflow Visits</h2>
        <div style="margin: 20px auto; padding: 0 20px; max-width: 250px;">
          <div class="impact">
            <div class="impact-title">% change</div>
            <div class="impact-bars" style="border-right: 3px solid #000; border-left: 3px solid #000; position: relative; width: 246px; box-sizing: border-box;">
              <div class="negative-state" style="width: 42px; position: absolute; left: 80px; right: 0; height: 35px;" title="-6%"></div>
              <div class="positive-state" style="width: 21px; position: absolute; right: 97px; height: 35px;" title="+3%"></div>
            </div>
            <div class="text-container">
              <div style="width: 50%;" class="negative-state-text">-20%</div>
              <div class="zero-value">0</div>
              <div style="width: 50%;" class="positive-state-text">20%</div>
            </div>
          </div>
          <div style="text-align: left; margin-top: 20px;">
            Raw data:
          </div>
          <div style="text-align: left;">
            <div>
              Control: 1500
            </div>
            <div>
              Variation: 1600
            </div>
          </div>
        </div>
      </div>
      <div class="chart">
        <h2>Subscriptions</h2>
        <div style="margin: 20px auto; padding: 0 20px; max-width: 250px;">
          <div class="impact">
            <div class="impact-title">% change</div>
            <div class="impact-bars" style="border-right: 3px solid #000; border-left: 3px solid #000; position: relative; width: 246px; box-sizing: border-box;">
              <div class="negative-state" style="width: 56px; position: absolute; left: 66px; height: 35px;" title="-8%"></div>
              <div class="positive-state" style="width: 70px; position: absolute; right: 48px; height: 35px;" title="+10%"></div>
            </div>
            <div class="text-container">
              <div style="width: 50%" class="negative-state-text">-20%</div>
              <div class="zero-value">0</div>
              <div style="width: 50%" class="positive-state-text">20%</div>
            </div>
          </div>
          <div style="text-align: left; margin-top: 20px;">
            Raw data:
          </div>
          <div style="text-align: left;">
            <div>
              Control: 619
            </div>
            <div>
              Variation: 701
            </div>
          </div>
        </div>
      </div>
      <div class="chart">
        <h2>Booked Revenue</h2>
        <div class="impact">
          <div class="impact-title">Impact</div>
          <div class="impact-bars">
            <div style="width: 70%" class="negative-state" title="70%"></div>
            <div class="zero-line"></div>
            <div style="width: 30%" class="positive-state" title="30%"></div>
          </div>
          <div class="text-container">
            <div style="width: 70%" class="negative-state-text">-6%</div>
            <div class="zero-value">0</div>
            <div style="width: 30%" class="positive-state-text">3%</div>
          </div>
        </div>
        <div class="chart-canvas">
          <bar-chart :labels="labels" :datasets="datasets2"></bar-chart>
        </div>
      </div>
      <div class="chart">
        <h2>LTV</h2>
        <div class="impact">
          <div class="impact-title">Impact</div>
          <div class="impact-bars">
            <div style="width: 0%" class="negative-state" title="0%"></div>
            <div class="zero-line"></div>
            <div style="width: 100%" class="positive-state" title="100%"></div>
          </div>
          <div class="text-container">
            <div style="width: 70%" class="negative-state-text">0%</div>
            <div class="zero-value" style="display: none">0</div>
            <div style="width: 30%" class="positive-state-text">6%</div>
          </div>
        </div>        <div class="chart-canvas">
          <bar-chart :labels="labels" :datasets="datasets3"></bar-chart>
        </div>
      </div>
    </div>
    <div class="charts-breakdown">
      <div class="charts-section subscriptions">
        <h2>Subscriptions Breakdown</h2>
        <div class="charts">
          <div class="chart">
            <div class="title">Annual</div>
            <div class="numeric-result up">+5.87% <span class="no-confidence" title="The degree to be certain with that the data contains the true value of the population. Needs to reach 95%.">(99.57%)</span></div>
            <div class="small-chart">
              <bar-chart :labels="labels" :datasets="datasets4"></bar-chart>
            </div>
          </div>
          <div class="chart no-confidence">
            <div class="title">Monthly</div>
            <div class="numeric-result up">+7.31%% <span class="no-confidence" title="The degree to be certain with that the data contains the true value of the population. Needs to reach 95%.">(87.03%)</span></div>
            <div class="small-chart">
              <bar-chart :labels="labels" :datasets="datasets7"></bar-chart>
            </div>
          </div>
          <div class="chart">
            <div class="title">Lifetime</div>
            <div class="numeric-result down">-12.3% <span class="no-confidence" title="The degree to be certain with that the data contains the true value of the population. Needs to reach 95%.">(97.1%)</span></div>
            <div class="small-chart">
              <bar-chart :labels="labels" :datasets="datasets6" ></bar-chart>
            </div>
          </div>
        </div>
      </div>
      <div class="charts-section booked">
        <h2>Booked Breakdown</h2>
        <div class="charts">
          <div class="chart">
            <div class="title">Annual</div>
            <div class="numeric-result up">+6.41% <span title="The degree to be certain with that the data contains the true value of the population. Needs to reach 95%.">(95.75%)</span></div>
            <div class="small-chart">
              <bar-chart :labels="labels" :datasets="datasets4"></bar-chart>
            </div>
          </div>
          <div class="chart">
            <div class="title">Monthly</div>
            <div class="numeric-result up">+7.24% <span class="no-confidence" title="The degree to be certain with that the data contains the true value of the population. Needs to reach 95%.">(95.11%)</span></div>
            <div class="small-chart">
              <bar-chart :labels="labels" :datasets="datasets5"></bar-chart>
            </div>
          </div>
          <div class="chart no-confidence">
            <div class="title">Lifetime</div>
            <div class="numeric-result down">-4.3% <span class="no-confidence" title="The degree to be certain with that the data contains the true value of the population. Needs to reach 95%.">(82.71%)</span></div>
            <div class="small-chart">
              <bar-chart :labels="labels" :datasets="datasets8"></bar-chart>
            </div>
          </div>
        </div>
      </div>
      <div class="charts-section booked">
        <h2>LTV Breakdown</h2>
        <div class="charts">
          <div class="chart no-confidence">
            <div class="title">Annual</div>
            <div class="numeric-result up">+6.05% <span class="no-confidence" title="The degree to be certain with that the data contains the true value of the population. Needs to reach 95%.">(78.88%)</span></div>
            <div class="small-chart">
              <bar-chart :labels="labels" :datasets="datasets7"></bar-chart>
            </div>
          </div>
          <div class="chart no-confidence">
            <div class="title">Monthly</div>
            <div class="numeric-result up">+7.31% <span class="no-confidence" title="The degree to be certain with that the data contains the true value of the population. Needs to reach 95%.">(82.71%)</span></div>
            <div class="small-chart">
              <bar-chart :labels="labels" :datasets="datasets7"></bar-chart>
            </div>
          </div>
          <div class="chart not-significant">
            <div class="title">Lifetime</div>
            <div class="numeric-result down">-9.6% <span title="The degree to be certain with that the data contains the true value of the population. Needs to reach 95%.">(99.94%)</span></div>
            <div class="small-chart">
              <bar-chart :labels="labels" :datasets="datasets6"></bar-chart>
            </div>
            <div class="no-data">
              <div>Not enough data</div>
              <div>54 samples</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="total-users">
      <span>
        Total users:
      </span>
      <span>
        Control: 1400
      </span>
      <span>
        Variation: 1300
      </span>
    </div>
  </div>
</template>

<style lang="less" scoped>
h3 {
  &.numeric-result {
    font-size: 32px;

    &.up {
      color: #22b300;
    }

    &.down {
      color: #f27273;
    }

    span {
      font-size: 16px;
      font-weight: normal;
    }
  }
}

.impact {
  margin: 0 auto;
  max-width: 250px;

  .impact-title {
    font-size: 14px;
    margin-bottom: 2px;
    text-align: left;
  }

  .impact-bars {
    display: flex;
    height: 35px;
    width: 100%;

    .zero-line {
      border-left: 1px solid #000;
    }

    .negative-state {
      background-color: #f27273;
      border-radius: 7px 0 0 7px;
    }

    .positive-state {
      background-color: #3fcd73;
      border-radius: 0 7px 7px 0;
    }
  }

  .text-container {
    display: flex;
    font-size: 14px;
    width: 100%;

    .negative-state-text {
      text-align: left;
    }

    .positive-state-text {
      text-align: right;
    }
  }
}
.charts-main {
  display: flex;

  .no-confidence {
    h3 {
      opacity: 0.4;
    }

    .chart-canvas {
      opacity: 0.4;
    }

    .down,
    .up {
      color: #737373;
    }
  }

  .chart {
    width: 25%;

    .horizonal-bars {
      > div {
        height: 100px;
        position: relative;
      }
    }

    .chart-canvas {
      margin: 0 auto;
      max-width: 250px;

      > div {
        position: relative;
        height: 300px;
      }
    }
  }
}

.charts-breakdown {
  display: flex;

  .charts-section {
    width: 33%;

    .charts {
      display: flex;

      .chart {
        max-width: 250px;
        width: 33%;

        .title {
          font-weight: bold;
        }

        .numeric-result {
          font-size: 18px;
          font-weight: bold;

          &.up {
            color: #22b300;
          }

          &.down {
            color: #f27273;
          }

          span {
            font-size: 14px;
            font-weight: normal;
          }
        }

        &.not-significant {
          .numeric-result,
          .small-chart {
            display: none;
          }
        }

        &.no-confidence {
          opacity: 0.4;

          .down,
          .up {
            color: #737373;
          }
        }

        .small-chart {
          > div {
            height: 200px;
            position: relative;
          }
        }

        .no-data {
          margin: 60px auto 0;
          max-width: 100px;
        }
      }
    }
  }
}
.total-users {
  text-align: left;
}
</style>
<script>
import BarChart from "./../components/BarChart.js";

export default {
  components: {BarChart},
  props: ["chartdata", "options", "id"],
  data() {
    return {
      labels: ["", ""],
      hello: "a",
      datasets: [
        {
          label: "control",
          backgroundColor: "#f27273",
          data: [591],
          barPercentage: 0.6
        },
        {
          label: "variation",
          backgroundColor: "#3fcd73",
          data: [658],
          barPercentage: 0.6
        }
      ],
      datasets1: [
        {
          label: "control",
          backgroundColor: "#f27273",
          data: [1500],
          barPercentage: 0.6
        },
        {
          label: "variation",
          backgroundColor: "#3fcd73",
          data: [1600],
          barPercentage: 0.6
        }
      ],
      datasets2: [
        {
          label: "control",
          backgroundColor: "#f27273",
          data: [27229.1],
          barPercentage: 0.6
        },
        {
          label: "variation",
          backgroundColor: "#3fcd73",
          data: [21369.56],
          barPercentage: 0.6
        }
      ],
      datasets3: [
        {
          label: "control",
          backgroundColor: "#C5C5C5",
          data: [85039.7],
          barPercentage: 0.6
        },
        {
          label: "variation",
          backgroundColor: "#878787",
          data: [96870.65],
          barPercentage: 0.6
        }
      ],
      datasets4: [
        {
          label: "control",
          backgroundColor: "#74bf62",
          data: [223],
          barPercentage: 0.6
        },
        {
          label: "variation",
          backgroundColor: "#22b300",
          data: [242],
          barPercentage: 0.6
        }
      ],
      datasets5: [
        {
          label: "control",
          backgroundColor: "#74bf62",
          data: [5000.87],
          barPercentage: 0.6
        },
        {
          label: "variation",
          backgroundColor: "#22b300",
          data: [6000.69],
          barPercentage: 0.6
        }
      ],
      datasets6: [
        {
          label: "control",
          backgroundColor: "#f78b8b",
          data: [20000.65],
          barPercentage: 0.6
        },
        {
          label: "variation",
          backgroundColor: "#f27273",
          data: [18000.11],
          barPercentage: 0.6
        }
      ],
      datasets7: [
        {
          label: "control",
          backgroundColor: "#bfbfbf",
          data: [14000],
          barPercentage: 0.6
        },
        {
          label: "variation",
          backgroundColor: "#737373",
          data: [15000],
          barPercentage: 0.6
        }
      ],
      datasets8: [
        {
          label: "control",
          backgroundColor: "#bfbfbf",
          data: [500],
          barPercentage: 0.6
        },
        {
          label: "variation",
          backgroundColor: "#737373",
          data: [400],
          barPercentage: 0.6
        }
      ],
      datasets9: [
        {
          label: "",
          backgroundColor: "#737373",
          data: [{ x: -5, y: 0 }, { x: 5, y: 0 }],
          fill: false,
          lineTension: 0,
          radius: 5
        }
      ]
    };
  }
};
</script>
