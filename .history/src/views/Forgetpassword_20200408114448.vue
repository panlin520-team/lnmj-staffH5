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
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
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
    return {};
  },
  created() {},
  methods: {
    //返回登录页面
    returnLojin() {
      const _this = this;
      _this.$router.replace("/Lojin");
    },
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    //修改密码数据
    ruleForm: {
      pass: "",
      checkPass: ""
    },
    
    //验证规则
    pass: [{ validator: validatePass, trigger: "blur" }],
    checkPass: [{ validator: validatePass2, trigger: "blur" }],
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
  .changepassword {
    width: 80%;
    height: 280px;
    margin-top: 20px;
    margin: 0 auto;
    border: 1px solid red;
  }
}
</style>
