 <!--修改密码-->
<template>
  <div class="forgetpassword">
    <div class="imgs" @click="returnLojin">
      <img src="../assets/images/icon-left.png" alt />
    </div>
    <div class="changepassword">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="手机号" prop="poNumder">
          <el-input type="password" v-model="ruleForm.poNumder"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="verification" class="verificas">
          <el-input class="verfition" type="password" v-model="ruleForm.verification"></el-input>
          <div class="sendverification">获取验证码</div>
        </el-form-item>
        <el-form-item label="新密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" size="mini" @click="submitForm('ruleForm')">确认</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>


<script>
export default {
  name: "forgetpassword",
  components: {},
  data() {
    //输入密码
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      //修改密码数据
      ruleForm: {
        pass: "",
        checkPass: "",
        poNumder: "",
        verification: ""
      },

      //验证规则
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  created() {},
  methods: {
    //返回登录页面
    returnLojin() {
      const _this = this;
      _this.$router.replace("/Lojin");
    },
    //验证成功
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
    // resetForm(formName) {
    //   this.$refs[formName].resetFields();
    // }
  }
};
</script>

<style lang="less" scoped>
.forgetpassword {
  width: 100%;
  height: 100%;
  background: url("../assets/images/backcolor.jpg") no-repeat;

  position: relative;
  .imgs {
    width: 50px;
    height: 50px;
    padding: 10px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .changepassword {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    padding-top: 20px;
    background-color: rgba(248, 248, 250, 0.8);
    border-radius: 6px;
    width: 80%;
    height: 310px;
    margin: auto;
    .el-form-item__content{
      margin-left: 120px;
    }
    .el-form {
      margin-right: 20px;
      .verificas {
        clear: both;
        .verfition {
          width: 110px;
          float: left;
        }
        .sendverification {
          float: left;
          background-color: rgb(153, 150, 150);
          border-radius: 4px;
          width: 70px;
          height: 40px;
          color: rgb(212, 203, 203);
          text-align: center;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
