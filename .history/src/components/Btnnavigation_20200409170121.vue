 <!--底部导航-->
<template>
  <div class="btnnavigation">
    <!-- <div class="somenavigation" to="/homepage">
      <div class="navitnew">
      <router-link to="/homepage">首页</router-link>
      </div>
    </div>-->
    <!-- <router-link class="somenavigation" to="/homepage">
      <div class="navitnew">
        <img src="../assets/images/homepage.png" alt />
      </div>
    </router-link>
    <router-link class="somenavigation" to="/Performance">
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
    <div
      class="somenavigation"
      @click="closeClick(item)"
      v-for="item in dataondter"
      :class="item.index == someIndex ? 'active' : 'acc'"
      :key="item.index"
    >
      <router-link class="somenavig" :to="{ path: item.path }">
        <div class="navitnew" v-if="trueobject">
          <img :src="item.img" alt />
        </div>
        <div class="navitnew" v-if="trueobjects">
          <img :src="item.imgs" alt />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "btnnavigation",
  components: {},
  data() {
    return {
      //绑定index
      someIndex: "",
      dataondter: [
        {
          index: 1,
          path: "/homepage",
          img: require("../assets/images/homepage.png")
        },
        {
          index: 2,
          path: "/Performance",
          img: require("../assets/images/pagename.png"),
          imgs: require("../assets/images/pagename.png")
        },
        {
          index: 3,
          path: "/crew",
          img: require("../assets/images/crew.png")
        },
        {
          index: 4,
          path: "/salary",
          img: require("../assets/images/wage.png")
        }
      ]
    };
  },
  created() {},
  methods: {
    closeClick(res) {
      console.log(res);
      this.someIndex = res.index;
    }
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
    height: 100%;
    &.active {
      background-color: rgb(252, 137, 7);
    }
    &.acc {
      background-color: #525351;
    }
    .somenavig {
      width: 100%;
      height: 100%;
    }
    .navitnew {
      text-align: center;
      line-height: 90px;
    }
  }
}
</style>