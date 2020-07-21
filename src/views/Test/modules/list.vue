<template>
  <div class="eva-list">
    <CommonTable :tableLabel="tableLabel" :tableData="tableData" bordered>
      <el-table-column fixed="left" label="序号" width="100" type="index">
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <span
            @click="handleClick(scope)"
            type="text"
            size="small"
            style="color:#1665ff;cursor: pointer;"
            >项管理</span
          >
        </template>
      </el-table-column>
    </CommonTable>
  </div>
</template>

<script>
import CommonTable from '@/components/CommonTable';
export default {
  name: '',
  components: { CommonTable },
  data() {
    return {
      tableData: [
        { name: '微信模板' },
        { name: '执法中队模板' },
        { name: '志愿活动模板' },
        { name: '委员模板' },
        { name: '志愿者模板' },
      ],
      tableLabel: [
        {
          prop: 'name',
          label: '模板名称',
          //   width: 300
        },
      ],
    };
  },
  mounted() {},
  methods: {
    handleClick(row) {
      this.$router.push('/evaluate/itemmanage');
      console.log(row);
    },
  },
};
</script>

<style lang="scss" scoped>
.eva-list {
  width: 600px;
}
</style>
