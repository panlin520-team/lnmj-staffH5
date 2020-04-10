 <!--底部导航-->
<template>
  <div class="btnnavigation">
    <div class="somenavigation">
      <div class="navitnew">
      <router-link to="/homepage">首页</router-link>
      </div>
    </div>
    <div class="somenavigation">
      <div class="navitnew">
      <router-link to="/Performance">业绩</router-link>

      </div>
    </div>
    <div class="somenavigation">
      <div class="navitnew">
      <router-link to="/Performance">组员</router-link>

      </div>
    </div>
    <div class="somenavigation">
      <div class="navitnew">
      <router-link to="/salary">工资</router-link>
      </div>
    </div>
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
    border: 1px solid rgb(156, 152, 152);
    .navitnew {
      text-align: center;
      line-height: 75px;
    }
  }
}
</style>