<template>
  <!-- 搜索栏和添加用户 -->
  <div>
    <el-dialog
      style="width:auto;height:auto"
      :title="operateType==='add'?'增加用户信息':'编辑用户信息'"
      :visible.sync="isShow"
    >
      <!-- 表单页面 -->
      <div>
        <el-form :model="form">
          <div class="Id" style="display:flex;flex-direction:row;align-content: center">
            <el-form-item label="ID" :label-width="formLabelWidth">
              <el-input v-model="form.id" autocomplete="off"></el-input>
            </el-form-item>
            <el-button @click="getId" class="getIdBtn" type="primary">生成ID</el-button>
          </div>
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="地址" :label-width="formLabelWidth">
            <el-input v-model="form.address" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="职位" :label-width="formLabelWidth">
            <el-select v-model="form.job" placeholder="请选择">
              <el-option label="前端" value="前端"></el-option>
              <el-option label="后端" value="后端"></el-option>
              <el-option label="运营" value="运营"></el-option>
              <el-option label="客服" value="客服"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取消</el-button>
        <el-button @click="confirm">确定</el-button>
      </div>
    </el-dialog>
    <!-- 输入框 -->
    <el-input
      placeholder="请输入内容"
      v-model="input"
      clearable
      style="border:1px solid #aaaaaa;width:300px;margin:20px"
    ></el-input>
    <!-- 搜索 -->
    <el-button type="primary" plain style="margin-left:10px" @click="search">搜索</el-button>
    <!-- 取消搜索 -->
    <el-button
      v-if="this.$store.state.userSearchRes.length"
      type="primary"
      plain
      style="margin-left:10px"
      @click="cancelSearch"
    >取消搜索</el-button>
    <!-- 添加按钮 -->
    <el-button type="primary" plain style="margin-left:10px" @click="addUser">添加用户</el-button>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export default {
  data() {
    return {
      input: "", //搜索关键字

      operateType: "add", //操作类型

      isShow: false, //是否显示
      form: {
        name: "",
        address: "",
        job: "",
        status: 1,
        id: ""
      },
      formLabelWidth: "120px",

      searchRes: [] //搜索结果
    };
  },
  methods: {
    //从后端获取用户列表
    getUserList() {
      axios.get("/api/getUserList").then(res => {
        console.log("获取用户数据：", res.data);
        this.tableData = res.data;
      });
    },
    // 清除搜索记录
    cancelSearch() {
      console.log("取消搜索");
      this.$store.state.userSearchRes = [];
    },
    //搜索
    search() {
      console.log("点击搜索");

      // 判断是否含有搜索结果
      if (this.$store.state.userSearchRes.length) {
        alert("先点击取消搜索");
      } else {
        this.$store.state.userList.forEach(item => {
          // console.log('@@@@',item)
          if (
            item.name.includes(this.input) ||
            item.id.includes(this.input) ||
            item.address.includes(this.input) ||
            item.job.includes(this.input)
          ) {
            // this.searchRes.push(item);
            this.$store.state.userSearchRes.push(item);
          }
        });
      }

      console.log("搜索结果:", this.$store.state.userSearchRes);
      //无搜索结果提示
      if (this.$store.state.userSearchRes.length == 0) {
        alert("暂无搜索结果");
      }
    },
    //获取自动生成ID
    getId() {
      this.form.id = uuidv4().slice(0, 7);
      console.log(this.form["id"]);
    },
    //添加用户
    addUser() {
      this.isShow = true;
    },
    //提交确认添加
    confirm() {
      console.log("提交表单");
      axios
        .get("/api/addUser", {
          params: {
            name: this.form.name,
            address: this.form.address,
            job: this.form.job,
            id: this.form.id
          }
        })
        .then(() => {
          this.$store.commit("getUserInfo");
        });
    },
    //取消
    cancel() {
      this.isShow = false;
      this.form.name = "";
      this.form.address = "";
      this.form.job = "";
      this.form.id = "";
    }
  }
};
</script>

<style>
.getIdBtn {
  width: 100px;
  height: 30px;
  margin-left: 30px;
  text-align: center;
  line-height: 5px;
  font-size: 15px;
}
</style>