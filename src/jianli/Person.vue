<template>
  <div>
    <!-- 顶部栏 -->
    <!-- <div class="head">
      <div class="l-content">
        <el-button plain icon="el-icon-menu" size="mini"></el-button>
        <h3>个人简历</h3>
      </div>
      <div class="r-content">
        <el-dropdown trigger="click" szie="mini">
          <span>
            <img :src="userImg" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div> -->
    <!-- 用户信息部分__左侧 -->
    <div>
      <el-row class="home" :gutter="20">
        <el-col :span="8" style="margin-top:20px">
          <el-card class="user" shadow="hover">
            <div class="user_top">
              <img :src="userImg" />
              <div class="user_info">
                <p style="font-size:20px;margin-bottom:0px">Admin</p>
                <p style="font-size:10px">前端开发</p>
              </div>
            </div>

            <div class="login_info">
              <p>
                上次登录时间:
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span>2022-07-10</span>
              </p>
              <p>
                上次登录地点:
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span>杭州</span>
              </p>
            </div>
          </el-card>
          <!-- 数据部分 -->
          <el-card style="margin-top:20px;height:280px">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column v-for="(lab,key) in table_lab" :key="key" :label="lab" :prop="key"></el-table-column>
            </el-table>
          </el-card>
        </el-col>
        <!-- 用户信息部分__右侧 -->
        <el-col :span="16" style="margin-top:20px">
          <div class="num">
            <el-card
              v-for="item in countData"
              :key="item.name"
              :body-style="{display:'flex',padding:0}"
              class="home-item"
            >
              <div class="lab_i">
                <i
                  :class="`el-icon-${item.icon}`"
                  :style="{background:item.color,width:'70px',height:'70px',fontSize:'40px',textAlign:'center'}"
                ></i>
              </div>

              <div>
                <p style="margin: 10px 0px 10px 20px">{{item.val}}</p>
                <p style="margin:0px 0px 10px 20px">{{item.name}}</p>
              </div>
            </el-card>
          </div>

          <el-card style="width:920px;margin-top:20px;height:230px">
            <!-- <Bar style="width:auto;height:230px"></Bar> -->
            <Echarts :chartData="echartData.AAAData" style="width:auto;height:230px"></Echarts>
          </el-card>
          <div class="barpie">
            <el-card style="width:425px;height:210px;margin-top:20px;margin-right:50px">
              <!-- <LineChart style="width:auto;height:230px"></LineChart> -->
              <Echarts :chartData="echartData.BBBData" style="width:auto;height:230px"></Echarts>
            </el-card>
            <el-card style="width:425px;height:210px;margin-top:20px">
              <!-- <PieChart style="width:auto;height:230px;padding-top:0px;"></PieChart> -->
              <Echarts :chartData="echartData.CCCData" style="width:auto;height:230px;padding-top:0px;"></Echarts>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// import Bar from "../echarts/Bar.vue";
// import LineChart from "@/echarts/LineChart.vue";
// import PieChart from "@/echarts/PieChart.vue";
import Echarts from "@/echarts/Echarts.vue";

export default {
  data() {
    return {
      // 照片
      userImg: require("../assets/logo.png"),
      //  表数据
      tableData: [
        {
          name: "苹果",
          daysell: 100,
          monsell: 1000,
          totalsell: 10000
        },
        {
          name: "橘子",
          daysell: 200,
          monsell: 2000,
          totalsell: 20000
        },
        {
          name: "梨子",
          daysell: 300,
          monsell: 3000,
          totalsell: 30000
        }
      ],
      //  数据表标签
      table_lab: {
        name: "名称",
        daysell: "日销",
        monsell: "月销",
        totalsell: "总销量"
      },
      //   数据统计
      countData: [
        { name: "今日支付订单", val: 123, icon: "success", color: "#2ec7c9" },
        { name: "今日收藏订单", val: 123, icon: "star-on", color: "#ffb980" },
        { name: "今日未支付订单", val: 123, icon: "s-goods", color: "#5ab1ef" },
        { name: "本月支付订单", val: 123, icon: "success", color: "#5ab1ef" },
        { name: "本月收藏订单", val: 123, icon: "star-on", color: "#ffb980" },
        { name: "本月未支付订单", val: 123, icon: "s-goods", color: "#5ab1ef" }
      ],
      //用户列表数据
      // userData: [],
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
      ],
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
      
      //饼图数据
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
      ], 

      // Echarts图表数据
      echartData: {
        // 柱状图数据
        AAAData: {
          xData: [],
          series: []
        },
        // 折线图数据
        BBBData: {
          xData: [],
          series: []
        },
        // 饼图
        CCCData: {
          series: []
        }
      }
    };
  },
  methods: {},
  mounted() {
    //柱状图数据
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
    this.echartData.AAAData.xData = date2;
    this.echartData.AAAData.series = [
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
    ];



    // 折线图数据
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

    this.echartData.BBBData.xData = date;
    this.echartData.BBBData.series = series;



    //饼图
    this.echartData.CCCData.series = {
            type: "pie",
            data: this.CData,
            // radius: "60%"
          };
  },
  components: { Echarts }
};
</script>

<style lang="less">
//顶部
.head {
  display: flex;
  height: 50px;
  //   background-color: red;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}

.l-content {
  height: 100%;
  width: 200px;
  //   background-color: aqua;
  align-items: center;
  display: flex;
  h3 {
    margin-left: 10px;
  }
}

.r-content {
  height: 40px;
  width: 40px;
  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }
}
// 用户信息
.home {
  //   background-color: aqua;
  padding: 10px 20px;
}
.user {
  //   background-color: aqua;
}
.user_top {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid gray;
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
}
.user_info {
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
}

//销量数据
.num {
  height: 150px;
  //   background-color: aqua;
  display: flex;
  flex-wrap: wrap;
}
.home-item {
  padding: 0px;
  width: 300px;
  height: 70px;
  margin: 0 3px;
}
.lab_i {
  vertical-align: middle;
}
//柱状图和饼图部分
.barpie {
  // width: 1000px;
  // background-color: aqua;
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
}
</style>