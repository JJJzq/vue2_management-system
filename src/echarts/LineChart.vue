<template>
  <div ref="main"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  mounted() {
    this.drawLine();
  },
  data() {
    return {
      // 折线图数据
      aData: [
        {
          a: 100,
          b: 200,
          c: 300
        },
        {
          a: 200,
          b: 300,
          c: 400
        },
        {
          a: 400,
          b: 600,
          c: 500
        }
      ],
      aDate: ["22/1", "22/2", "22/3"],
    };
  },
  methods: {
    drawLine() {
      const keyArry = Object.keys(this.aData[0]);
      //   console.log(keyArry);
      const series = [];
      const date = this.aDate;
      keyArry.forEach(key => {
        series.push({
          name: key,
          data: this.aData.map(item => item[key]),
          type: "line"
        });
      });


      //配置折线图
      const opt1 = {
        xAxis: {
          data: date
        },
        yAxis: {},
        legend: {
          data: keyArry
        },
        series
      };

      
      //显示
      const E = echarts.init(this.$refs.main);
      E.setOption(opt1);
    }
  }
};
</script>
    
<style>
</style>