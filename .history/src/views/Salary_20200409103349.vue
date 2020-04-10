 <!--工资-->
<template>
  <div class="salary">
    <div
      class="content"
      :style="{'height': (virtualHeight - 80)+'px','overflow':'auto','margin-bottom':80+'px'}"
    >
      <div class="wage">
        <label>工资</label>
        <span>{{salarywage}}</span>
      </div>
      <div class="uplodse">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
    </div>

    <!-- 底部导航 -->
    <div class="switchoverBtn">
      <Btnnavigation></Btnnavigation>
    </div>
  </div>
</template>

<script>
//引入模块
import Btnnavigation from "@/components/Btnnavigation.vue";
export default {
  name: "salary",
  components: { Btnnavigation },
  data() {
    return {
      // 浏览器可视高度
      virtualHeight: window.innerHeight,
      //工资
      salarywage: "5000",
      imageUrl: ""
    };
  },
  created() {},
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      console.log(3445);
    },
    beforeAvatarUpload(file) {
            const isLt2M = file.size / 1024 / 1024 < 2;
      console.log(123);
            if (!isLt2M) {
              this.$message.error("上传头像图片大小不能超过 2MB!");
            }
            return isJPG && isLt2M;
    }
  }
};
</script>

<style lang="less" scoped>
.salary {
  width: 100%;
  height: 100%;
  position: relative;
  .content {
    width: 100%;
    border: 1px solid red;
    .wage {
      width: 100%;
      display: flex;
      justify-content: space-between;
      height: 25px;
      border: 1px solid rebeccapurple;
      padding: 0 20px;
    }
    .uplodse {
      width: 178px;
      height: 178px;
      border: 1px solid red;
      margin: 20px;
      .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
      }
      .avatar-uploader .el-upload:hover {
        border-color: #409eff;
      }
      .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
      }
      .avatar {
        width: 178px;
        height: 178px;
        display: block;
      }
    }
  }
  .switchoverBtn {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 80px;
    z-index: 999;
  }
}
</style>