 <!--底部导航-->
<template>
  <div class="btnnavigation">
    <div class="somenavigation">首页</div>
    <div class="somenavigation">业绩</div>
    <div class="somenavigation">组员</div>
    <div class="somenavigation">工资</div>
  </div>
</template>

<script>
export default {
  name: "btnnavigation",
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style lang="less" scoped>
.btnnavigation {
  width: 100%;
  height: 100%;
  display: flex;
  .somenavigation {
    width: 25%;
    height: 100%;
    margin: 0 auto;
    border: 1px solid red;
  }
}
</style>