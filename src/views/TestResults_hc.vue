<template>
  <div class="test-results">
    <h1>
      Results for <span>{{ id }}</span>
    </h1>
    <div class="charts-main">
      <div class="chart">
        <h2>Buyflow Visits</h2>
        <div class="horizonal-bars">
          <highcharts :options="chartOptions"></highcharts>
        </div>
        <div class="chart-canvas"></div>
      </div>
      <div class="chart">
        <h2>Subscriptions</h2>
        <h3 class="numeric-result up">+8.61% <span class="significant" title="The degree to be certain with that the data contains the true value of the population. Needs to reach 95%.">(96.59%)</span></h3>
        <div class="chart-canvas">
        </div>

      </div>
      <div class="chart no-confidence">
        <h2>Booked Revenue</h2>
        <h3 class="numeric-result down">-5.3% <span class="significant" title="The degree to be certain with that the data contains the true value of the population. Needs to reach 95%.">(72.2%)</span></h3>
        <div class="chart-canvas">
        </div>
      </div>
      <div class="chart">
        <h2>LTV</h2>
        <h3 class="numeric-result up">+11.13% <span class="significant" title="The degree to be certain with that the data contains the true value of the population. Needs to reach 95%.">(99.5%)</span></h3>
        <div class="chart-canvas">
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
            </div>
          </div>
          <div class="chart no-confidence">
            <div class="title">Monthly</div>
            <div class="numeric-result up">+7.31%% <span class="no-confidence" title="The degree to be certain with that the data contains the true value of the population. Needs to reach 95%.">(87.03%)</span></div>
            <div class="small-chart">
            </div>
          </div>
          <div class="chart">
            <div class="title">Lifetime</div>
            <div class="numeric-result down">-12.3% <span class="no-confidence" title="The degree to be certain with that the data contains the true value of the population. Needs to reach 95%.">(97.1%)</span></div>
            <div class="small-chart">
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
            </div>
          </div>
          <div class="chart">
            <div class="title">Monthly</div>
            <div class="numeric-result up">+7.24% <span class="no-confidence" title="The degree to be certain with that the data contains the true value of the population. Needs to reach 95%.">(95.11%)</span></div>
            <div class="small-chart">
            </div>
          </div>
          <div class="chart no-confidence">
            <div class="title">Lifetime</div>
            <div class="numeric-result down">-4.3% <span class="no-confidence" title="The degree to be certain with that the data contains the true value of the population. Needs to reach 95%.">(82.71%)</span></div>
            <div class="small-chart">
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
            </div>
          </div>
          <div class="chart no-confidence">
            <div class="title">Monthly</div>
            <div class="numeric-result up">+7.31% <span class="no-confidence" title="The degree to be certain with that the data contains the true value of the population. Needs to reach 95%.">(82.71%)</span></div>
            <div class="small-chart">
            </div>
          </div>
          <div class="chart not-significant">
            <div class="title">Lifetime</div>
            <div class="numeric-result down">-9.6% <span title="The degree to be certain with that the data contains the true value of the population. Needs to reach 95%.">(99.94%)</span></div>
            <div class="small-chart">
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

<script>
import More from "highcharts/highcharts-more";
import Highcharts from "highcharts";
More(Highcharts);

export default {
  name: "test",
  components: {
    highcharts: Highcharts
  },
  props: ["id"],
  data() {
    return {
      chartOptions: {
        chart: {
          inverted: true
        },
        series: [
          {
            type: "candlestick",
            data: [[-5, 5]]
          }
        ],
        yAxis: [{
          title: {
            text: ''
          },
          labels: {
            format: '{value}%'
          }
        }],
        xAxis: [{
          title: {
            text: ''
          },
          labels: {
            enabled: false
          }
        }],
        plotOptions: {
          series: {
            pointWidth: 5
          }
        },
        legend: {
          enabled: false
        },
        title: {
          text: 'Impact'
        }
      },
      datasets: [
        {
          label: "control",
          backgroundColor: "#74bf62",
          data: [500]
        },
        {
          label: "variation",
          backgroundColor: "#22b300",
          data: [600]
        }
      ],
      datasets1: [
        {
          label: "control",
          backgroundColor: "#f78b8b",
          data: [1500]
        },
        {
          label: "variation",
          backgroundColor: "#f27273",
          data: [1400]
        }
      ],
      datasets2: [
        {
          label: "control",
          backgroundColor: "#bfbfbf",
          data: [27000]
        },
        {
          label: "variation",
          backgroundColor: "#737373",
          data: [21000]
        }
      ],
      datasets3: [
        {
          label: "control",
          backgroundColor: "#74bf62",
          data: [40000]
        },
        {
          label: "variation",
          backgroundColor: "#22b300",
          data: [50000]
        }
      ],
      datasets4: [
        {
          label: "control",
          backgroundColor: "#74bf62",
          data: [200]
        },
        {
          label: "variation",
          backgroundColor: "#22b300",
          data: [210]
        }
      ],
      datasets5: [
        {
          label: "control",
          backgroundColor: "#74bf62",
          data: [11000]
        },
        {
          label: "variation",
          backgroundColor: "#22b300",
          data: [12000]
        }
      ],
      datasets6: [
        {
          label: "control",
          backgroundColor: "#f78b8b",
          data: [5000]
        },
        {
          label: "variation",
          backgroundColor: "#f27273",
          data: [4000]
        }
      ],
      datasets7: [
        {
          label: "control",
          backgroundColor: "#bfbfbf",
          data: [14000]
        },
        {
          label: "variation",
          backgroundColor: "#737373",
          data: [15000]
        }
      ],
      datasets8: [
        {
          label: "control",
          backgroundColor: "#bfbfbf",
          data: [500]
        },
        {
          label: "variation",
          backgroundColor: "#737373",
          data: [400]
        }
      ],
      datasets9: [
        {
          label: "",
          backgroundColor: "#737373",
          data: [{x:-5, y: 0},
            {x:5, y:0}
            ],
          fill: false,
          lineTension: 0,
          radius: 5
        }
      ]
    };
  }
};
</script>

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