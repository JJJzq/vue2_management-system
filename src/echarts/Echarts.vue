<template>
  <div ref="echart"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  props: {
    // 判断是否含有轴
    hasAxisChart: {
      type: Boolean,
      default: true
    },
    // 数据
    chartData: {
      type: Object,
      default() {
        return {
          xData: [],
          series
        };
      }
    }
  },
  data() {
    return {
      axisOpt: {
        textStyle: {
          color: "#333"
        },
        grid: {
          left: "20%"
        },
        tooltip: {
          trigger: "axis"
        },
        xAxis: {
          type: "category",
          data: [],
        //   axisLine: {
        //     lineStyle: {
        //       color: "#17b3a3"
        //     }
        //   },
        //   axisLabel: {
        //     interval: 0,
        //     color: "#333"
        //   }
        },
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#17b3a3"
              }
            }
          }
        ],
        series: []
      },
      normalOpt: {
        tooltip: {
          trigger: "item"
        },
        series: []
      },
      echart: null
    };
  },
  computed: {
    options() {
      return this.hasAxisChart ? this.axisOpt : this.normalOpt;
    }
  },
  watch: {
    chartData: {
      handler: function() {
        this.initChart();
      },
      deep: true
    }
  },
  methods: {
    initChart() {
      this.initChartData();
      if (this.echart) {
        this.chart.setOption(this.options);
      } else {
        this.chart = echarts.init(this.$refs.echart);
        this.chart.setOption(this.options);
      }
    },
    initChartData() {
      if (this.hasAxisChart) {
        this.axisOpt.xAxis.data = this.chartData.xData;
        this.axisOpt.series = this.chartData.series;
      } else {
        this.normalOpt.series = this.chartData.series;
      }
    }
  }
};
</script>

<style>
</style>