 <!--修改密码-->
<template>
  <div class="forgetpassword">
    <div class="imgs" @click="returnLojin">
      <img src="../assets/images/icon-left.png" alt />
    </div>
    <div class="changepassword">

    </div>
  </div>
</template>


<script>
export default {
  name: "forgetpassword",
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
.forgetpassword {
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
  .changepassword{
    width: 80%;
    height: 280px;
    margin-top: ;
    margin: 0 auto;
    border: 1px solid red;
  }
}
</style>
