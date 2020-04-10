 <!--底部导航-->
<template>
  <div class="btnnavigation">
    底部导航
  </div>
</template>

<script>
export default {
  name: "homepage",
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {
    //返回登录页面
    returnLojin() {
      const _this = this;
      _this.$router.replace("/Lojin");
    }
  }
};
</script>

<style lang="less" scoped>
.homepage {
  width: 100%;
  height: 100%;
  position: relative;
  .imgs {
    width: 50px;
    height: 50px;
    padding: 10px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .switchoverBtn{
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 80px;
      border: 1px solid red;
  }
}
</style>