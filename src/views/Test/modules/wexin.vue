<template>
  <div class="weixin-elva">
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
        <el-table-column fixed="left" label="序号" width="100" type="index">
        </el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <span
              @click="handleClick(scope), (dialogVisible = true)"
              type="text"
              size="small"
              style="color:#1665ff;cursor: pointer;"
              >修改</span
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
    <Dialog
      :title="title"
      :dialogVisible="dialogVisible"
      v-if="dialogVisible"
    ></Dialog>
  </div>
</template>

<script>
import Dialog from '../components/dialog';
import Form from '@/components/CommonForm';
import Table from '@/components/CommonTable';
import Pagination from '@/components/Pagination';
export default {
  name: '',
  components: { Form, Table, Pagination, Dialog },
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
          lable: '目搜索：',
          placeholder: '请输入',
          show: true, // 控制是否可编辑
          // type: 'date',
          required: false,
        },
      ],
      tableData: [{ content: 'weis', name: 'jjj', type: '456' }],
      tableLabel: [
        {
          prop: 'content',
          label: '目',
        },
        {
          prop: 'name',
          label: '字段名称',
        },
        {
          prop: 'type',
          label: '输入类型',
        },
      ],
      title: '修改内容',
      dialogVisible: false,
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
.weixin-elva {
  height: 100%;
  width: 100%;
  .top-content {
    width: 100%;
    // height: 100px;
    // padding-top: 10px;
    .el-button {
      height: 30px;
      line-height: 30px;
      margin: 0;
      text-align: center;
      padding: 0px 5px;
      &.search {
        margin: 5px;
      }
    }
  }
}
.shu {
  display: inline-block;
  height: 15px;
  line-height: 15px;
  width: 2px;
  color: #aaa;
  background-color: #aaa;
  margin: 0 5px;
}
.el-pagination {
  position: absolute;
  right: 0;
  bottom: 20px;
}
</style>
