<template>
  <div class="data-wapper">
    <div class="top-content flex flex_between">
      <Form :form="form" :formLable="formLable" :labelWidth="'80px'" />
      <el-button type="primary" size="small"
        ><i class="el-icon-upload el-icon--right"></i>导出</el-button
      >
    </div>
    <div class="main-content">
      <Table :tableLabel="tableLabel" :tableData="tableData" bordered> </Table>
      <Pagination
        @pagination="pagination"
        :total="total"
        :page="page"
        :limit="limit"
        :layout="layout"
      />
    </div>
  </div>
</template>

<script>
import Form from '@/components/CommonForm';
import Table from '@/components/CommonTable';
import Pagination from '@/components/Pagination';
export default {
  name: '',
  components: { Form, Table, Pagination },
  data() {
    return {
      total: 15,
      page: 1,
      limit: 10,
      layout: 'total, sizes, prev, pager, next, jumper',
      form: {
        formInline: false,
        date: '',
      },
      formLable: [
        {
          model: 'date',
          lable: '时间筛选',
          placeholder: '全部时间',
          show: true, // 控制是否可编辑
          type: 'date',
          required: false,
        },
      ],
      tableData: [],
      tableLabel: [
        {
          prop: 'index',
          label: '商户编号',
        },
        { prop: 'name', label: '商户名称' },
        { prop: 'total', label: '总分' },
        { prop: 'weixin', label: '微信' },
        { prop: 'person', label: '委员' },
        { prop: 'valuteer', label: '志愿者活动' },
        { prop: 'depart', label: '执法中队' },
      ],
    };
  },
  mounted() {},
  methods: {
    pagination() {},
  },
};
</script>

<style lang="scss" scoped>
.data-wapper {
  height: 100%;
  width: 100%;
  .top-content {
    width: 100%;
    // height: 100px;
    .el-button {
      height: 30px;
      line-height: 30px;
      margin: 0;
      text-align: center;
      padding: 0px 5px;
    }
  }
}
.el-pagination {
  position: absolute;
  right: 0;
  bottom: 20px;
}
</style>
