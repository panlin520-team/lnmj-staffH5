 <!--登录首页-->
<template>
  <div class="homepage">
    <div class="imgs" @click="returnLojin">
      <img src="../assets/images/icon-left.png" alt />
    </div>
    <!-- 中间 -->
    <div class="content">

    </div>
    <!-- 底部导航 -->
   <div class="switchoverBtn">

   </div>
  </div>
</template>


<script>
//引入模块
import Btnnavigation from "@/components/Btnnavigation.vue";

export default {
  name: "homepage",
  components: {Btnnavigation},
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
