<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
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
      
    }
  }
};
</script>
<style lang="less">

</style>
