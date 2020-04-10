 <!--工资-->
<template>
  <div class="salary">
    <div class="content">
      <div class="wage">
        <label>工资</label>
        <span>{{salarywage}}</span>
      </div>
    </div>
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
  name: "salary",
  components: { Btnnavigation },
  data() {
    return {
        //工资
        salarywage: "5000"
    };
  },
  created() {},
  methods: {}
};
</script>

<style lang="less" scoped>
.salary {
  width: 100%;
  height: 100%;
  position: relative;
  .content {
    width: 100%;
    height: 80%;
    border: 1px solid red;
    .wage {
    }
  }
  .switchoverBtn {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 80px;
    z-index: 999;
  }
}
</style>