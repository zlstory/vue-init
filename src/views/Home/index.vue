<template>
  <div class="home flex">
    <SideNav />
    <div class="right-wrapper">
      <HeaderFun />
      <Breadcrumb />
      <Main />
    </div>
  </div>
</template>

<script>
import SideNav from './Layout/SideNav';
import Breadcrumb from './Layout/Breadcrumb';
import HeaderFun from './Layout/HeaderFun';
import Main from './Layout/Main';
export default {
  name: '',
  components: { SideNav, Breadcrumb, HeaderFun, Main },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  .right-wrapper {
    transition: margin-left 0.28s;
    width: calc(100% - 180px);
    margin-left: 180px;
  }
  .hideSidebar + .right-wrapper {
    width: calc(100% - 50px);
    margin-left: 54px;
  }
}
</style>
