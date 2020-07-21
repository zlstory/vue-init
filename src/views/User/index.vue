<template>
  <div class="user-wapper">
    <div v-if="$route.path == '/user'">
      <div class="top-content flex flex_between">
        <Form :form="form" :formLable="formLable" :labelWidth="'100px'">
          <el-button type="primary" size="small" class="search">搜索</el-button>
        </Form>
        <el-button type="primary" size="small"
          ><i class="el-icon-plus el-icon--right"></i>新增</el-button
        >
      </div>
      <div class="main-content">
        <Table :tableLabel="tableLabel" :tableData="tableData" bordered>
          <el-table-column label="操作" width="200">
            <template slot-scope="scope">
              <span
                @click="handleClick(scope), (dialogVisible = true)"
                type="text"
                size="small"
                style="color:#1665ff;cursor: pointer;"
                >查看</span
              >
              <i class="shu"></i>
              <span
                @click="deleteS(scope.row)"
                type="text"
                size="small"
                style="color:red;cursor: pointer;"
                >删除</span
              >
            </template>
          </el-table-column>
        </Table>
        <Pagination
          @pagination="pagination"
          :total="total"
          :page="page"
          :limit="limit"
          :layout="layout"
        />
      </div>
    </div>
    <router-view v-else></router-view>
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
        formInline: true,
        date: '',
      },
      formLable: [
        {
          model: 'date',
          lable: '用户筛选',
          placeholder: '全部用户',
          show: true, // 控制是否可编辑
          type: 'date',
          required: false,
        },
      ],
      tableData: [{ index: '1' }],
      tableLabel: [
        {
          prop: 'index',
          label: '商户编号',
        },
        { prop: 'name', label: '商户名称' },
        {
          prop: 'index1',
          label: '联系人',
        },
        {
          prop: 'index2',
          label: '联系电话',
        },
        {
          prop: 'inde我x',
          label: '商户状态',
        },
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
    handleClick(r) {
      console.log(r);
    },
    deleteS(row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          // delete row
          console.log(row);

          this.$message({
            type: 'success',
            message: '删除成功!',
          });
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.shu {
  display: inline-block;
  height: 15px;
  line-height: 15px;
  width: 2px;
  color: #aaa;
  background-color: #aaa;
  margin: 0 5px;
}
.user-wapper {
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
      &.search {
        margin-top: 5px;
      }
    }
  }
}
.el-pagination {
  position: absolute;
  right: 0;
  bottom: 20px;
}
</style>
