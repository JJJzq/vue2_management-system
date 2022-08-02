<template>
  <div class="layout">
    <!-- 左侧栏 -->
    <Zuo class="mune"></Zuo>
    <!-- 右侧内容 -->
    <Content class="content"></Content>
  </div>
</template>

<script>
import Content from "./Content.vue";
import Zuo from "./Zuo.vue";
export default {
  components: { Content, Zuo }
};
</script>

<style lang="less" scoped>
.layout {
  padding-top: 0px;
  margin-top: 0px;
  display: flex;
  flex-direction: row;
  .mune {
    width: 200px;
    min-height: 500px;
    position: fixed;
    top: -25px;
    bottom: 0;
    left: 0;
    right: 0;

    margin-left: 0px;
    margin-top: 0px;
    // padding-top: -100px;
    // background-color: aqua;
  }
  .content {
    margin-left: 200px;
    margin-top: 0px;
    padding-top: 0px;
    // background-color: red;
  }
}
</style>