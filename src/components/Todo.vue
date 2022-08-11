<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>TodoList</span>
      <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
      <el-button style="float: right; padding: 3px 0" type="text" @click="add">添加</el-button>
    </div>
    <div v-for="item in todos" :key="item.id" class="text item" id="todoItem">
      <input type="checkbox" :checked="item.status" @click="item.status=!item.status" />
      {{item.thing}}
      <el-button
        style="float: right; padding: 3px 0"
        type="text"
        class="delBtn"
        @click="del(item.id)"
      >删除</el-button>
    </div>
    <h5>总共：{{this.totalNum}}，已完成{{this.doneNum}}</h5>
  </el-card>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      input: "",
      todos: [
        { id: "001", thing: "吃饭", status: 0 },
        { id: "002", thing: "睡觉", status: 1 },
        { id: "003", thing: "玩", status: 0 }
      ]
    };
  },
  methods: {
    add() {
      let newthing = {
        id: uuidv4().slice(0, 7),
        thing: this.input,
        status: 0
      };
      this.todos = [newthing, ...this.todos];
    },
    del(id) {
      console.log(id);
      let newTodo = this.todos.filter(item => {
        return item.id !== id;
      });
      this.todos = newTodo;
    }
  },
  computed: {
    totalNum() {
      return this.todos.length;
    },
    doneNum() {
      let done = this.todos.filter(item => {
        return item.status == 1;
      });
      return done.length;
    }
  }
};
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}

#todoItem {
  /* background-color: aqua; */
}

.delBtn {
  display: none;
}

#todoItem:hover .delBtn {
  display: inline;
  /* background-color: red; */
}
</style>