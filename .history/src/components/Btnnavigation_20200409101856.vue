 <!--底部导航-->
<template>
  <div class="btnnavigation">
    <!-- <div class="somenavigation">
      <div class="navitnew">
      <router-link to="/homepage">首页</router-link>
      </div>
    </div>-->
    <router-link class="somenavigation" to="/homepage">
      <div class="navitnew">
        <img src="../assets/images/homepage.png" alt="">
      </div>
    </router-link>
    <router-link class="somenavigation" to="/Performance">
      <div class="navitnew">
        <img src="../assets/images/crew.png" alt="">

      </div>
    </router-link>
    <router-link class="somenavigation" to="/crew">
      <div class="navitnew">
         <img src="../assets/images/performance.png" alt="">
      </div>
    </router-link>
    <router-link class="somenavigation" to="/salary">
      <div class="navitnew">
         <img src="../assets/images/wage.png" alt="">
      </div>
    </router-link>
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
  height: 80px;
  position: fixed;
  bottom: 0;
  display: flex;
  background-color: rgb(207, 202, 202);
  .somenavigation {
    width: 25%;
    .navitnew {
      text-align: center;
      line-height: 90px;
    }
  }
}
</style>