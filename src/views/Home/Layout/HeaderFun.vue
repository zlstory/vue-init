<template>
  <div class="header-nav flex flex_between">
    <span class="switch" @click="collapse">
      <svg-icon name="switch"></svg-icon>
    </span>
    <div class="login flex">
      <div class="logo">
        <!-- <img src="@/assets/logo.png" alt="" width="30px" /> -->
        <svg-icon name="people"></svg-icon>
      </div>
      <el-dropdown>
        <span class="el-dropdown-link user-name">
          {{ userName }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="fixPass()"
            >修改密码</el-dropdown-item
          >
          <el-dropdown-item @click.native="open()">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div class="fix-pass" v-if="isVisible">
        <el-dialog
          title="修改密码"
          :visible.sync="isVisible"
          width="30%"
          :before-close="handleClose"
        >
          <FormInput :form="form" :formLable="formLable" />

          <span slot="footer" class="dialog-footer">
            <el-button @click="isVisible = false">取 消</el-button>
            <el-button type="primary" @click="isVisible = false"
              >确 定</el-button
            >
          </span>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import FormInput from '@/components/CommonForm';
import { mapGetters, mapMutations } from 'vuex';
export default {
  name: '',
  components: { FormInput },
  data() {
    return {
      form: {
        formInline: false,
        username: 'Crystal',
        password: '123',
      },
      formLable: [
        {
          model: 'oldname',
          lable: '旧密码',
          placeholder: '请输入',
          show: true, // 控制是否可编辑
        },
        {
          model: 'username',
          lable: '新密码',
          placeholder: '请输入',
          show: true,
        },
        {
          show: true,
          model: 'password',
          lable: '重复密码',
          placeholder: '请输入',
        },
      ],
      userName: 'Crystal',
      isVisible: false,
    };
  },
  computed: {
    ...mapGetters(['isCollapse']),
  },
  mounted() {},
  methods: {
    ...mapMutations(['changeNavCollapse']),
    collapse() {
      this.changeNavCollapse(!this.isCollapse);
    },
    fixPass() {
      this.isVisible = true;
    },
    handleClose() {
      console.log('close');
    },
    open() {
      this.$confirm('此操作将退出当前系统, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '已退出!',
          });
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消',
          });
        });
      this.$router.push('/login');
    },
  },
};
</script>

<style lang="scss" scoped>
.header-nav {
  padding: 20px;
  border-bottom: 1px solid #ccc;
  i {
    vertical-align: middle;
  }
  .switch {
    cursor: pointer;
    line-height: 30px;
  }
  .login {
    .logo {
      height: 30px;
      width: 30px;
      line-height: 30px;
      font-size: 18px;
      border-radius: 50% !important;
    }
    .user-name {
      font-size: 24px;
      cursor: pointer;
    }
  }
}
</style>
