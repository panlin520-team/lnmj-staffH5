<template>
  <div class="lojin">
    <div class="lojinimgs">
      <img src="../assets/images/icon_llmj.jpg" alt />
    </div>
    <div class="inputfield">
      <div class="inputBox">
        <div class="spande">
          <img src="../assets/images/pagename.png" alt />
        </div>
        <el-input v-model="input_name" placeholder="请输入用户名"></el-input>
      </div>
      <div class="inputBox">
        <div class="spande">
          <img src="../assets/images/password.png" alt />
        </div>
        <el-input v-model="input_name" placeholder="请输入密码"></el-input>
      </div>
      <div class="registedes">
        <label @click="register">立即注册</label>
        <span @click="passw">忘记密码？</span>
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
  name: "lojin",
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
    }
  }
};
</script>

<style lang='less' scoped>
.lojin {
  width: 100%;
  height: 100%;
  background: url("../assets/images/backcolor.jpg") no-repeat;
  .lojinimgs {
    width: 250px;
    margin: auto;
    padding-top: 100px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .inputfield {
    width: 100%;
    height: 150px;
    margin-top: 50px;
    padding: 0 20px;
    .inputBox {
      width: 100%;
      height: 45px;
      margin-top: 20px;
      display: flex;
      .spande {
        width: 45px;
        img {
          margin-top: 5px;
        }
      }
      .el-input {
        width: 80%;
      }
    }
    .registedes{
      width: 75%;
      display: flex;
      color: #fff;
      justify-content: space-between;
      height: 20px;
      margin: 0 auto;
    }
  }
  .lojinbtn {
    width: 70%;
    margin: 0 auto;
    height: 45px;
    border-radius: 4px;
    background: rgba(161, 224, 97, 0.7);
    .centers {
      text-align: center;
      line-height: 45px;
      .btnClss {
        color: #fff;
        font-size: 20px;
        display: inline;
        margin-right: 20px;
      }
      label {
        color: #fff;
        text-align: center;
        font-size: 20px;
      }
    }
  }
}
</style>
