 <!--业绩-->
<template>
  <div class="performance">
    <div class="clienList">
      <el-table :data="tableData_enterpurchase" style="width: 100%">
        <el-table-column label="出库人">
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">{{ scope.row.createOperator }}</div>
          </template>
        </el-table-column>
        <el-table-column label="采购订单号">
          <template slot-scope="scope">
            <span>{{ scope.row.outStorageNumber }}</span>
          </template>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="showPopOver(scope.row)">查看</el-button>
            <!-- <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button> -->
          </template>
        </el-table-column>
      </el-table>
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
  name: "performance",
  components: { Btnnavigation },
  data() {
    return {
        //业绩数据
        tableData_enterpurchase:[
            {
                createOperator: "潘林",
                outStorageNumber: "456465"
            },
            {
                createOperator: "任青云",
                outStorageNumber: "3677843"
            },
            {
                createOperator: "潘林",
                outStorageNumber: "456465"
            },
        ],
    };
  },
  created() {},
  methods: {
      //
      showPopOver(){
      }
  }
};
</script>

<style lang="less" scoped>
.performance {
  width: 100%;
  height: 100%;
  position: relative;
  .switchoverBtn {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 80px;
    z-index: 999;
  }
}
</style>