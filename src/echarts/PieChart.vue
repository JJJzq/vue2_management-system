<template>
  <div ref="pie"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  mounted() {
    this.drawLine();
  },
  data() {
    return {
      CData: [
        {
          name: "a",
          value: 100
        },
        {
          name: "b",
          value: 200
        },
        {
          name: "c",
          value: 300
        }
      ]
    };
  },
  methods: {
    drawLine() {
      let opt3 = {
        series: [
          {
            type: "pie",
            data: this.CData,
            radius: "60%"
          }
        ]
      };
      const E = echarts.init(this.$refs.pie);
      E.setOption(opt3);
    }
  }
};
</script>

<style>
</style>