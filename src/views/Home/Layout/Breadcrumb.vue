<template>
  <div class="bread">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="(item, i) in currentPath"
        :key="i"
        :to="{ path: item.path }"
        >{{ item.name }}</el-breadcrumb-item
      >
    </el-breadcrumb>
    <h3 style="text-align:left;margin-top:20px;">{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      //   currentPath: '/'
    };
  },
  computed: {
    currentPath() {
      return this.$route.matched.slice(1);
    },
    title() {
      return this.$route.matched
        .slice(-1)
        .map((item) => {
          // console.log(item, 'item');

          return item.meta ? item.meta.title : item.name;
        })
        .join('');
    },
  },
  watch: {
    currentPath() {},
  },
  mounted() {
    this.get();
  },
  methods: {
    get() {
      // console.log(this.$route.matched);
      // console.log(this.title);
    },
  },
};
</script>

<style lang="scss" scoped>
.bread {
  padding: 20px;

  border-bottom: 2px solid #eee;
  .el-breadcrumb__item {
    cursor: pointer;
  }
}
</style>
