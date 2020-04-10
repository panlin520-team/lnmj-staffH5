 <!--组员-->
<template>
  <div class="crew">
    <div class="clienList">
      <el-table :data="tableData_enterpurchase" style="width: 100%">
        <el-table-column label="姓名">
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">{{ scope.row.createOperator }}</div>
          </template>
        </el-table-column>
        <el-table-column label="业绩">
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">{{ scope.row.outStorageNumber }}</div>
          </template>
        </el-table-column>
        <!-- <el-table-column label="采购订单号">
          <template slot-scope="scope">
            <span>{{ scope.row.outStorageNumber }}</span>
        </template>-->
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="showPopOver(scope.row)">查看</el-button>
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
  name: "crew",
  components: { Btnnavigation },
  data() {
    return {
      //业绩数据
      tableData_enterpurchase: [
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
        }
      ]
    };
  },
  created() {},
  methods: {
    //
    showPopOver() {}
  }
};
</script>

<style lang="less" scoped>
.crew {
  width: 100%;
  height: 100%;
  position: relative;
  .clienList {
    width: 100%;
    max-height: 585px;
    overflow: auto;
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