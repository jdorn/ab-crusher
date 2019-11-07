import More from "highcharts/highcharts-more";
import Highcharts from "highcharts";
More(Highcharts);

export default {
  data() {
    return {
      chartOptions: {
        chart: {
          type: "columnrange",
          inverted: true
        },
        series: [
          {
            data: [[-5, 5]]
          }
        ],
        yAxis: [
          {
            title: {
              text: ""
            },
            labels: {
              format: "{value}%"
            }
          }
        ],
        xAxis: [
          {
            title: {
              text: ""
            },
            labels: {
              enabled: false
            }
          }
        ],
        plotOptions: {
          series: {
            pointWidth: 5
          }
        },
        legend: {
          enabled: false
        },
        title: {
          text: "Impact"
        }
      }
    };
  }
};
