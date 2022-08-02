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
      //   柱状图数据
      userData: [
        {
          date: "周一",
          new: 5,
          active: 200
        },
        {
          date: "周二",
          new: 7,
          active: 300
        },
        {
          date: "周三",
          new: 12,
          active: 230
        },
        {
          date: "周四",
          new: 16,
          active: 240
        },
        {
          date: "周五",
          new: 17,
          active: 300
        },
        {
          date: "周六",
          new: 20,
          active: 400
        },
        {
          date: "周日",
          new: 10,
          active: 440
        }
      ]
    };
  },
  methods: {
    drawLine() {
      //柱状图
      console.log(this.userData);
      //获取时间
      const date2 = [];
      const keyArry2 = Object.keys(this.userData[0]);
      console.log(keyArry2);
      console.log(keyArry2[0]);
      this.userData.map(item => {
        date2.push(item[keyArry2[0]]);
      });
      //
      console.log(date2);
      //获取新增用户
      const new_user = [];
      this.userData.map(item => {
        new_user.push(item[keyArry2[1]]);
      });
      //获取活跃
      const active_user = [];
      this.userData.map(item => {
        active_user.push(item[keyArry2[2]]);
      });

      const opt2 = {
        xAxis: {
          data: date2
        },
        yAxis: {},
        legend: {
          data: ['新增用户','活跃量']
        },
        series: [
          {
            name: "新增用户",
            type: "bar",
            data: new_user
          },
          {
            name: "活跃量",
            type: "bar",
            data: active_user
          }
        ]
      };

      //显示
      const E = echarts.init(this.$refs.main);
      E.setOption(opt2);
    }
  }
};
</script>
    
<style>
</style>