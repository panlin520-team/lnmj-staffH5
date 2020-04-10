 <!--业绩-->
<template>
  <div class="performance">
    组员
    <!-- 底部导航 -->
    <div class="switchoverBtn">
      <Btnnavigation></Btnnavigation>
    </div>
  </div>
</template>

<script>
//引入模块
import Btnnavigation from "@/components/Btnnavigation.vue";
export default {
  name: "performance",
  components: { Btnnavigation },
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style lang="less" scoped>
.performance {
  width: 100%;
  height: 100%;
  position: relative;
  .switchoverBtn {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 80px;
    z-index: 999;
  }
}
</style>