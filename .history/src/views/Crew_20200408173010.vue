 <!--组员-->
<template>
  <div class="crew">
    <div
      class="clienList"
      :style="{'height': (virtualHeight - 80)+'px','overflow':'auto','margin-bottom':80+'px'}"
    >
      <el-table :data="tableData_enterpurchase" style="width: 100%">
        <el-table-column label="组员">
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
         // 浏览器可视高度
      virtualHeight: window.innerHeight,
      //业绩数据
      tableData_enterpurchase: [
        {
          createOperator: "潘林",
          outStorageNumber: "11111"
        },
        {
          createOperator: "任青云",
          outStorageNumber: "22222"
        },
        {
          createOperator: "潘林",
          outStorageNumber: "3333"
        },
        {
          createOperator: "潘林",
          outStorageNumber: "444444"
        },
        {
          createOperator: "任青云",
          outStorageNumber: "555555"
        },
        {
          createOperator: "潘林",
          outStorageNumber: "66666"
        },
        {
          createOperator: "潘林",
          outStorageNumber: "77777"
        },
        {
          createOperator: "任青云",
          outStorageNumber: "88888"
        },
        {
          createOperator: "潘林",
          outStorageNumber: "99999"
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