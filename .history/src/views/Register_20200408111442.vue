<template>
  <div class="register">
    <h1>注册</h1>
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
  methods: {
    //登录
    login() {
      console.log(123);
    },
    //注册
    register() {
      const _this = this;
      _this.$router.replace("/register");
    },
    //忘记密码
    passwords() {
      console.log(789);
    }
  }
};
</script>

<style lang="less">

</style>
