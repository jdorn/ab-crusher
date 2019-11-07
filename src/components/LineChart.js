import { Line, mixins } from "vue-chartjs";

const { reactiveProp } = mixins;

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: {
    labels: Array,
    datasets: Array
  },
  mounted() {
    this.renderChart(
      {
        labels: ["", ""],
        datasets: this.datasets
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          gridLines: {
            display: false,
            lineWidth: 5
          },
          yAxes: [
            {
              display: true,
              ticks: {
                maxTicksLimit: 1
              }
            }
          ],
          xAxes: [
            {
              display: true,
              ticks: {
                maxTicksLimit: 5
              }
            }
          ]
        }
      }
    );
  }
};
