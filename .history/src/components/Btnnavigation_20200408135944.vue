 <!--底部导航-->
<template>
  <div class="btnnavigation">
    <div class="somenavigation">
        首页
    </div>
    <div class="somenavigation">
        首页
    </div>
    <div class="somenavigation">
        首页
    </div>
    <div class="somenavigation">
        首页
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
  methods: {
  
  }
};
</script>

<style lang="less" scoped>
.btnnavigation {
  width: 100%;
  height: 100%;
  display: inline;
 .somenavigation{
     width: 25%;
     height: 100%;
     border: 1px solid red;
 }
}
</style>