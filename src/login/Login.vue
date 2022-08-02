<template>
  <div class="loginbody">
    <div class="login">
      <div class="mylogin" align="center">
        <h4>登录</h4>
        <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-width="0px">
          <el-form-item label prop="account" style="margin-top:10px;">
            <el-row>
              <el-col :span="2">
                <span class="el-icon-s-custom"></span>
              </el-col>
              <el-col :span="22">
                <el-input class="inps" placeholder="账号" v-model="loginForm.account"></el-input>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label prop="passWord">
            <el-row>
              <el-col :span="2">
                <span class="el-icon-lock"></span>
              </el-col>
              <el-col :span="22">
                <el-input
                  class="inps"
                  type="password"
                  placeholder="密码"
                  v-model="loginForm.passWord"
                ></el-input>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item style="margin-top:55px;">
            <el-button type="primary" round class="submitBtn" @click="submitForm">登录</el-button>
          </el-form-item>
          <div class="unlogin">
            <router-link :to="{ path: '/forgetpwd'}">忘记密码?</router-link>|
            <router-link :to="{path: '/register'}">
              <a href="register.vue" target="_blank" align="right">注册新账号</a>
            </router-link>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      loginForm: {
        account: "",
        passWord: ""
      },
      loginRules: {
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        passWord: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    //提交登录
    submitForm() {
      let that = this;
      const userAccount = this.loginForm.account;
      const userPassword = this.loginForm.passWord;
      console.log("登录！账号，密码", userAccount, userPassword);
      if (userAccount == "" || userPassword == "") {
        alert("请输入账号和密码");
      } else {
        axios
          .post("/api/Login", { ua: userAccount, up: userPassword })
          .then(res => {
            console.log("登录结果", res.data);
            if (res.data.status == 200) {
              that.$router.push({ name: "shouye" });
            } else {
              alert("用户名或密码错误,请重新输入");
            }
          });
      }
    }
  }
};
</script>

<style>
.loginbody {
  overflow: scroll;
  overflow-y: hidden;
  overflow-x: hidden;
}

.login {
  width: 100vw;
  padding: 0;
  margin: 0;
  height: 100vh;
  font-size: 16px;
  background-position: left top;
  background-color: #242645;
  color: #fff;
  font-family: "Source Sans Pro";
  position: relative;
  /* background-image: url("/static/images/background.jpg"); */
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.mylogin {
  width: 240px;
  height: 280px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  padding: 50px 40px 40px 40px;
  box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.7);
  opacity: 1;
  background: linear-gradient(
    230deg,
    rgba(53, 57, 74, 0) 0%,
    rgb(0, 0, 0) 100%
  );
}

.inps input {
  border: none;
  color: #fff;
  background-color: transparent;
  font-size: 12px;
}

.submitBtn {
  background-color: transparent;
  color: #39f;
  width: 200px;
}
</style>