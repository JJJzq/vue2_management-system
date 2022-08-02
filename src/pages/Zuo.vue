<template>
  <!-- 左侧栏 -->
  <div>
    <div class="htglxt">
      <h5>后台管理系统</h5>
    </div>

    <el-menu
      default-active="/"
      class="el-menu-vertical-demo"
      background-color="#314155"
      text-color="#fff"
      active-text-color="#46a0fc"
      router
    >
      <el-menu-item index="/home">
        <i class="el-icon-orange"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/userList">用户列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-menu-item index="/quanxian">
        <i class="el-icon-menu"></i>
        <span>权限管理</span>
      </el-menu-item>

    </el-menu>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.htglxt{
  width: auto;
  height: 50px;
  background-color: #314155; 
  // background-color: red;
  color: white;
  text-align: center;
  line-height: 50px;
  font-size: 25px;
  margin-top: 0px;
  padding-top: 0px;
  
}
</style>