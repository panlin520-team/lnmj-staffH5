<template>
  <div class="register">
    <div class="imgs" @click="returns"><img src="../assets/images/icon-left.png" alt=""></div>
  </div>
</template>


<script>
export default {
  name: "register",
  components: {},
  data() {
    return {
      // 用户名
      input_name: "",
      // 密码
      password: ""
    };
  },
  created() {},
  methods: {}
};
</script>

<style lang="less" scoped>
.register {
  width: 100%;
  height: 100%;
  .imgs{
    width: 50px;
    height: 50px;
    padding: 10px;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
