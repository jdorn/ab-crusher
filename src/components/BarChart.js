import { Bar, mixins } from "vue-chartjs";

const { reactiveProp } = mixins;

export default {
  extends: Bar,
  mixins: [reactiveProp],
  props: {
    labels: Array,
    datasets: Array,
    aa: String
  },
  mounted() {
    this.renderChart(
      {
        labels: [" "],
        datasets: this.datasets
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                maxTicksLimit: 5,
                fontSize: 8,
                autoSkipPadding: 20
              },
              scaleLabel: {
                display: true,
                labelString: this.aa
              }
            }
          ]
        },
        layout: {
          padding: 20
        },
        legend: {
          position: "bottom",
          align: "start",
          labels: {
            boxWidth: 10,
            fontSize: 8,
            padding: 10
          }
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItem) {
              return tooltipItem.xLabel + tooltipItem.value;
            }
          }
        },
        labels: {
          fontSize: 10
        },
        title: {
          display: true,
          text: "raw data",
          fontStyle: "normal",
          fontColor: "#2c3e50"
        }
      }
    );
  }
};
