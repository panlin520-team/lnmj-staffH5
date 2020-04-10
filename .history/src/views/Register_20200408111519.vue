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
  methods: {}
};
</script>

<style lang="less" scoped>
.register {
  width: 100%;
  height: 100%;
}
</style>
