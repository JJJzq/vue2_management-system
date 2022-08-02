<template>
  <!-- 右——内容页面 -->
  <div>
    <!-- <div class="top">{{this.$route.meta.title}}</div> -->

    <div class="head">
      <div class="l-content">
        <el-button plain icon="el-icon-menu" size="mini"></el-button>
        <h3>{{this.$route.meta.title}}</h3>
      </div>
      <div class="r-content">
        <el-dropdown trigger="click" szie="mini">
          <span>
            <img :src="userImg" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item @click.native="loginOut">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 照片
      userImg: require("../assets/logo.png")
    };
  },
  methods: {
    loginOut() {
      // console.log("退出账号");
      alert("退出账号");
      this.$router.push({ name: "denglu" });
    }
  }
};
</script>

<style lang="less" scoped>
// .top {
//   height: 50px;
//   margin-top: 0px;
//   background-color: aquamarine;
// }

//顶部
.head {
  margin-top: 0px;
  display: flex;
  height: 50px;
  // background-color: red;
  width: 1470px;
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
</style>