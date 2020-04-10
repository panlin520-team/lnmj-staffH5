<template>
  <div class="lojin">
    登录
  </div>
   <div class="loginPage">
    <div class="lojinimgs">
      <img src="../../assets/images/icon_llmj.jpg" alt />
    </div>
    <div class="inputfield">
      <div class="inputBox">
        <div class="spande">
          <img src="../../assets/images/pagename.png" alt />
        </div>
        <el-input v-model="input_name" placeholder="请输入用户名"></el-input>
      </div>
      <div class="inputBox">
        <div class="spande">
          <img src="../../assets/images/password.png" alt />
        </div>
        <el-input v-model="input_name" placeholder="请输入密码"></el-input>
      </div>
    </div>
    <div class="lojinbtn" @click="login">
      <div class="centers">
        <div class="btnClss">登</div>
        <label>录</label>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'lojin',
  components: {
  }
}
</script>
