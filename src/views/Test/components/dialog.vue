<template>
  <div class="dialog-wrapper">
    <el-dialog :title="title" :visible.sync="dialogVisible" width="30%">
      <slot />
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'dialog',
  props: {
    title: String,
    dialogVisible: Boolean,
  },
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
