 <!--登录首页-->
<template>
  <div class="homepage">
    <div class="imgs" @click="returnLojin">
      <img src="../assets/images/icon-left.png" alt />
    </div>
    <div class="switchover"></div>
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
  .imgs {
    width: 50px;
    height: 50px;
    padding: 10px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
