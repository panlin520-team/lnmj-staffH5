 <!--底部导航-->
<template>
  <div class="nav" v-for="(item,index) in navTo.operate" :key @click="change(index)">
    <!-- <div class="somenavigation">
      <div class="navitnew">
      <router-link to="/homepage">首页</router-link>
      </div>
    </div>-->
    <router-link class="somenavigation" :to="{ path: operate.path }">
      <div class="navitnew">
        <img src="../assets/images/homepage.png" alt />
      </div>
    </router-link>
    <!-- <router-link class="somenavigation" to="/Performance">
      <div class="navitnew">
        <img src="../assets/images/performance.png" alt />
      </div>
    </router-link>
    <router-link class="somenavigation" to="/crew">
      <div class="navitnew">
        <img src="../assets/images/crew.png" alt />
      </div>
    </router-link>
    <router-link class="somenavigation" to="/salary">
      <div class="navitnew">
        <img src="../assets/images/wage.png" alt />
      </div>
    </router-link>-->
  </div>
</template>

<script>
export default {
  name: "btnnavigation",
  components: {},
  data() {
    return {
      navTo: {
        operate: [
          { id: 1, name: "系统1", path: "/homepage" },
          { id: 2, name: "系统2", path: "/Performance" },
          { id: 3, name: "系统3", path: "/crew" },
          { id: 4, name: "系统4", path: "/salary" }
        ]
      }
    };
  },
  created() {},
  methods: {
    change() {}
  }
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
      color: red;
    }
  }
}
</style>