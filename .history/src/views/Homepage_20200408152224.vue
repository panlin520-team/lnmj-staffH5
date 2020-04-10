 <!--登录首页-->
<template>
  <div class="homepage">
    <div class="imgs" @click="returnLojin">
      <img src="../assets/images/icon-left.png" alt />
    </div>
    <!-- 中间 -->
    <div class="content">
      <div class="top" slot="top">
        <div class="title">员工资料</div>
      </div>
      <div class="main" slot="main">
        <div class="items scrollY">
          <!-- 头像上传 -->
          <div class="item">
            <label class="label-left" style="line-height: 60px;">头像</label>
            <div class="value">
             
            </div>
          </div>
          <div class="item">
            <label class="label-left">姓名</label>
            <div class="value">
              <input
                type="text"
                placeholder="请输入姓名"
                v-model="employeesDetails.name"
                class="input-value"
              />
            </div>
          </div>
          <div class="item">
            <label class="label-left">手机</label>
            <div class="value">
              <input
                type="text"
                placeholder="请输入手机号码"
                v-model="employeesDetails.mobile"
                class="input-value"
              />
            </div>
          </div>
          <div class="item">
            <label class="label-left">openid</label>
            <div class="value">
              <input
                type="text"
                placeholder="微信openid"
                v-model="employeesDetails.openid"
                class="input-value"
              />
            </div>
          </div>
          <div class="item">
            <label class="label-left">性别</label>
            <div class="value">
              <el-select v-model="employeesDetails.gender" placeholder="请选择性别">
                <el-option
                  v-for="item in genders"
                  :key="item.value"
                  :label="item.name"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div>
          <!-- <div class="item">
                <label class="label-left">所属分组</label>
                <div class="value">
                  <el-select v-model="employeesDetails.groupId" placeholder="请选择分组">
                    <el-option
                      v-for="item in groups"
                      :key="item.groupId"
                      :label="item.name"
                      :value="item.groupId"
                    ></el-option>
                  </el-select>
                </div>
          </div>-->
          <div class="item">
            <label class="label-left">所属部门</label>
            <div class="value">
              <el-select v-model="part_department" @change="changedepartment" placeholder="请选择所属部门">
                <el-option
                  v-for="item in part_partment"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div class="item">
            <label class="label-left">职务</label>
            <div class="value">
              <el-select v-model="employeepostName" @change="changedeptails" placeholder="请选择职务">
                <el-option
                  v-for="item in postNames"
                  :key="item.postId"
                  :label="item.name"
                  :value="item.postId"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div class="item">
            <label class="label-left">兼职职务</label>
            <div class="value">
              <el-select v-model="part_timeJobe" @change="changejobe" placeholder="请选择兼职职务">
                <el-option
                  v-for="item in part_timeNames"
                  :key="item.postId"
                  :label="item.name"
                  :value="item.postId"
                ></el-option>
              </el-select>
            </div>
          </div>

          <div class="item">
            <label class="label-left">是否兼职</label>
            <div class="value">
              <el-select v-model="part_trueJobe" @change="changetrueJobe" placeholder="请确认是否兼职">
                <el-option
                  v-for="item in part_trueNames"
                  :key="item.postId"
                  :label="item.name"
                  :value="item.postId"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div class="item">
            <label class="label-left">计算底薪</label>
            <div class="value">
              <el-select v-model="isBasicSalarer" @change="changeSalary" placeholder="是否计算底薪">
                <el-option
                  v-for="item in isBasicSalary"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div>
          <!-- <div class="item">
            <label class="label-left">级别</label>
            <div class="value">
              <el-select v-model="employeesDetails.postLevel" placeholder="请选择级别">
                <el-option
                  v-for="item in levels"
                  :key="item.postLevelId"
                  :label="item.postLevelName"
                  :value="item.postLevelId"
                ></el-option>
              </el-select>
            </div>
          </div>-->
          <div class="item">
            <label class="label-left">入职时间</label>
            <div class="value">
              <el-date-picker
                v-model="employeesDetails.entryTime"
                :editable="false"
                :clearable="false"
                align="center"
                type="date"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd"
                placeholder="选择入职时间"
                class="setEmpDatePicker"
              ></el-date-picker>
            </div>
          </div>
          <div class="item">
            <label class="label-left">目前状态</label>
            <div class="value">
              <el-select v-model="workingState" @change="changezhtai" placeholder="请选择员工目前状态">
                <el-option
                  v-for="item in workingStates"
                  :key="item.state"
                  :label="item.name"
                  :value="item.state"
                ></el-option>
              </el-select>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom" slot="bottom">
        <div class="btn-save btn-pointer" @click="newEmployees">确认修改</div>
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
  name: "homepage",
  components: { Btnnavigation },
  data() {
    return {
      //员工信息
      employeesDetails: {
        name: "",
        mobile: "",
        openid: "",
        gender: "",
        entryTime: "",
      },
      //部门
      part_department: "",
      part_partment: [],
      //职务
      employeepostName: "",
      postNames: [],
      //兼职职务
      part_timeJobe: "",
      part_timeNames: [],
      //是否兼职
      part_trueJobe: "",
      part_trueNames: [
        {
          postId: 1,
          name: "是"
        },
        {
          postId: 0,
          name: "否"
        }
      ],
      //是否计算底薪
      isBasicSalarer: "",
      isBasicSalary: [
        {
          value: 0,
          label: "否"
        },
        {
          value: 1,
          label: "是"
        }
      ],
      //目前状态
      workingState: "",
      workingStates: [
        {
          state: 1,
          name: "在职"
        },
        {
          state: 0,
          name: "离职"
        }
      ],
      //性别
      genders: [
        {
          value: 0,
          name: "女"
        },
        {
          value: 1,
          name: "男"
        }
      ]
    };
  },
  created() {},
  methods: {
    //返回登录页面
    returnLojin() {
      const _this = this;
      _this.$router.replace("/Lojin");
    },
    //修改
    newEmployees() {},
    //修改部门
    changedepartment() {},
    //修改职务
    changedeptails() {},
    //修改兼职职务
    changejobe() {},
    //是否兼职
    changetrueJobe() {},
    //是否计算底薪
    changeSalary() {},
    //目前状态
    changezhtai(){

    },
  }
};
</script>

<style lang="less" scoped>
.homepage {
  width: 100%;
  height: 100%;
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
  .content {
    .top {
      padding: 5px 15px;
    }
    .title {
      font-size: 17px;
      font-weight: 700;
    }
    .main{
        max-height: 400px;
        border: 1px solid red;
        overflow: auto;
        .item{
            display: flex;
            justify-content: space-between;
            .input-value{
                border: 1px solid rgb(142, 241, 60);
            }
        }
    }

    .bottom {
      text-align: right;
      .btn-save {
        padding: 7px 15px;
        font-size: 14px;
        margin-right: 15px;
        border-radius: 6px;
        color: #ffffff;
        background-color: #23a547;
        text-align: center;
        display: inline-block;
      }
      .iconfont {
        font-size: 25px;
      }
      .btn-del {
        padding: 7px 15px;
        font-size: 14px;
        margin-right: 15px;
        border-radius: 6px;
        color: #ffffff;
        background: #e6a23c;
        text-align: center;
        display: inline-block;
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
