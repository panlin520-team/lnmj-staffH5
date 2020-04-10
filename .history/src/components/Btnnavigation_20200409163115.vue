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
    <div class="somenavigation" v-for="item in dataondter" :key="item.name">
      <router-link class="somenavig" :to="{ path: item.path }">
        <div class="navitnew">
          <img :src="item.img" alt />
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
      dataondter: [
        {
          name: "哈哈哈",
          number: "333333",
          path: "/homepage",
          img: require('../assets/images/homepage.png')
        },
        {
          name: "嘿嘿嘿",
          number: "11111",
          path: "/Performance",
          img: require('../assets/images/')
        },
        {
          name: "我我我",
          number: "222222",
          path: "/crew",
          img: "../assets/images/crew.png"
        },
        {
          name: "他吞吞吐吐",
          number: "7777777",
          path: "/salary",
          img: "../assets/images/wage.png"
        }
      ]
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
    .somenavig {
      width: 100%;
      height: 100%;
    }
    .navitnew {
      text-align: center;
      line-height: 90px;
      color: red;
    }
  }
}
</style>