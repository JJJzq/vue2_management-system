<template>
  <!-- 右侧---用户列表 -->
  <div>
    <!-- <h5>用户列表组件</h5> -->
    <div class="content">
      <div class="content-top">
        <UserManage />
      </div>
    </div>
    <!-- 编辑弹窗 -->
    <el-dialog
      style="width:auto;height:auto"
      :title="operateType==='add'?'增加用户信息':'编辑用户信息'"
      :visible.sync="isShow"
    >
      <div>
        <el-form :model="form">
          <div class="Id" style="display:flex;flex-direction:row;align-content: center">
            <el-form-item label="ID" :label-width="formLabelWidth">
              <el-input v-model="form.id" autocomplete="off"></el-input>
            </el-form-item>
            <!-- <el-button @click="getId" class="getIdBtn" type="primary">生成ID</el-button> -->
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
        <el-button @click="isShow=false">取消</el-button>
        <el-button @click="confirm">确定</el-button>
      </div>
    </el-dialog>
    <!-- 用户列表 -->
    <el-table
      v-if="!this.$store.state.userSearchRes.length"
      :data="this.$store.state.userList"
      border
      style="width: 100%;"
    >
      <el-table-column type="index" label="序号" width="50"></el-table-column>
      <el-table-column prop="id" label="ID" width="50"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="address" label="地址" width="180"></el-table-column>
      <el-table-column prop="job" label="职位" width="120"></el-table-column>
      <el-table-column prop="status" label="状态" width="120">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.status"
            @change="changeSta($event,scope.row.id)"
            :active-value="1"
            :inactive-value="0"
            active-color="#13ce66"
            inactive-color="#ff4949"
          ></el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="opt" label="操作" width="280">
        <template slot-scope="scope">
          <el-button
            type="primary"
            icon="el-icon-edit"
            circle
            @click="handleEdit(scope.$index, scope.row)"
          ></el-button>
          <el-button
            type="danger"
            icon="el-icon-delete"
            circle
            @click="handleDelete(scope.$index, scope.row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 搜索结果 -->
    <el-table v-if="this.$store.state.userSearchRes.length" :data="this.$store.state.userSearchRes" border style="width: 100%;">
      <el-table-column type="index" label="序号" width="50"></el-table-column>
      <el-table-column prop="id" label="ID" width="50"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="address" label="地址" width="180"></el-table-column>
      <el-table-column prop="job" label="职位" width="120"></el-table-column>
      <el-table-column prop="status" label="状态" width="120">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.status"
            @change="changeSta($event,scope.row.id)"
            :active-value="1"
            :inactive-value="0"
            active-color="#13ce66"
            inactive-color="#ff4949"
          ></el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="opt" label="操作" width="280">
        <template slot-scope="scope">
          <el-button
            type="primary"
            icon="el-icon-edit"
            circle
            @click="handleEdit(scope.$index, scope.row)"
          ></el-button>
          <el-button
            type="danger"
            icon="el-icon-delete"
            circle
            @click="handleDelete(scope.$index, scope.row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
import UserManage from "./UserManage.vue";

export default {
  data() {
    return {
      // 静态用户数据
      // tableData: [
      //   {
      //     id: "001",
      //     name: "a",
      //     address: "杭州市",
      //     job: "前端",
      //     status: 1
      //   },
      //   {
      //     id: "002",
      //     name: "b",
      //     address: "杭州市",
      //     job: "运营",
      //     status: 0
      //   },
      //   {
      //     id: "003",
      //     name: "c",
      //     address: "杭州市",
      //     job: "后端",
      //     status: 1
      //   }
      // ],
      tableData: [],

      searchRes: [], //搜索结果
      //操作类型
      operateType: "bianji",
      //是否显示
      isShow: false,
      form: {
        name: "",
        address: "",
        job: "",
        status: 1,
        id: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    //全局事件总线--组件间通信

    //过滤用户列表
    // getSearchRes() {
    //   console.log("运行过滤");
    //   this.searchRes = this.tableData.filter(item => {
    //     return item.name == this.$store.state.keywords;
    //   });
    //   console.log(this.searchRes);
    // },

    //从后端获取用户列表
    getUserList() {
      this.$store.commit("getUserInfo");

      // setTimeout(() => {
      //   this.tableData=[]
      //   // console.log("长度", this.$store.state.userList.length);
      //   for (let i = 0; i < this.$store.state.userList.length; i++) {
      //     // console.log(res.data[i]);
      //     this.tableData.push(this.$store.state.userList[i]);
      //   }
      // }, 1000);
    },

    //改变状态
    changeSta(sta, id) {
      axios.get("/api/changeUS", {
        params: {
          cID: id,
          cSta: sta
        }
      });
      console.log("当前状态", sta);
      console.log("当前id", id);
      for (var i = 0; i < this.$store.state.userList.length; i++) {
        if (this.$store.state.userList[i].id == id) {
          this.$store.state.userList[i].status = sta;
          console.log("改变事件");
        }
      }
    },
    //编辑
    handleEdit(index, row) {
      console.log(index, row);
      this.isShow = true;
      this.form.id = row.id;
      this.form.name = row.name;
      this.form.address = row.address;
      this.form.job = row.job;
    },
    //弹窗------修改用户信息确定
    confirm() {
      console.log("确认修改信息");
      axios
        .get("/api/changeUI", {
          params: {
            name: this.form.name,
            id: this.form.id,
            address: this.form.address,
            job: this.form.job
          }
        })
        .then(() => {
          this.getUserList();
        });
    },

    //删除
    handleDelete(index, row) {
      console.log(index, row);
      this.$store.state.userList.splice(index, 1);
    }
  },
  created() {
    this.getUserList(); //渲染列表数据
  },
  mounted() {
    // this.getUserList(); //渲染列表数据
  },

  beforeUpdate() {
    console.log("更改之前");

    // for (let i = 0; i < this.$store.state.userSearchRes.length; i++) {
    //   this.$store.state.userSearchRes.splice(i);
    // }
    // console.log("置空后vuex中的搜索结果", this.$store.state.userSearchRes);
  },

  updated() {
    console.log("updated");
    // this.$store.state.userSearchRes.forEach(item => {
    //   this.searchRes.push(item);
    // });
    // console.log("$$$$$$$", this.searchRes);
  },
  watch: {},
  computed: {},
  components: { UserManage }
};
</script>

<style lang="less">
.top {
  height: 50px;
  margin-top: 0px;
  background-color: aquamarine;
}
</style>