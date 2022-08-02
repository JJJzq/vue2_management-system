<template>
  <div id="app">
    <!-- <div><h3>后台管理系统</h3></div> -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {}
};
</script>

<style>
#app {
  display: flex;
  flex-direction: row;
  /* margin-top: -10px; */
  margin-left: 0px;
  padding: 0px;
}
</style>
