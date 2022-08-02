<template>
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
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  name: "commonForm",
  beforeCreate() {
    // console.log("创建前", uuidv4());
  },
  created() {
    // console.log("创建后", uuidv4());
  },
  beforeMount() {
    // console.log("挂载前", uuidv4());
    // this.form.id = uuidv4()
  },
  mounted() {
    // console.log("挂载", uuidv4());
    // this.getId();
  },
  beforeUpdate() {
    // this.getId()
  },
  update() {
    // this.getId();
  },
  updated() {
    // this.getId();
  },
  activated() {
    // this.getId();
  },
  data() {
    return {
      form: {
        name: "",
        address: "",
        region: "",
        job: "",
        status: 1,
        id: ""
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    printa() {
      console.log("执行打印");
      console.log(this.form["name"]);
      // console.log(this.form['']);
      console.log(this.form["id"]);
      this.getId();
    },
    //******** */
    getId() {
      this.form.id = uuidv4().slice(0, 7);
      console.log(this.form["id"]);
    }
  }
};
</script>

<style>
.getIdBtn {
  width: 100px;
  height: 30px;
  margin-left: 30px;
  text-align:center;
  line-height: 5px;
  font-size: 15px;
}
</style>