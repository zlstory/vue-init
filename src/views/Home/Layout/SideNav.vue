<template>
  <div class="sidebar-wrap" :class="{ hideSidebar: isCollapse }">
    <div class="title">
      驾驶舱管理系统
    </div>
    <el-menu
      ref="sidebar"
      mode="vertical"
      :collapse-transition="false"
      :active-text-color="variables.menuActiveText"
      :collapse="isCollapse"
      :default-active="activeMenu"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :unique-opened="false"
    >
      <sidebar-item
        v-for="route in routes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SidebarItem from './SidebarItem';
import variables from '@/assets/style/variables.scss';

export default {
  name: 'SideNav',
  data() {
    return {};
  },
  components: {
    SidebarItem,
  },
  computed: {
    ...mapGetters(['isCollapse']),
    routes() {
      return this.$router.options.routes;
    },
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    variables() {
      return variables;
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar-wrap {
  position: fixed;
  top: 0px;
  left: 0;
  width: 180px;
  background-color: rgb(48, 65, 86);
  color: #fff;
  height: 100%;
  transition: width 0.28s;
  overflow-x: hidden;
  .title {
    color: #fff;
    font-weight: 700;
    height: 74px;
    line-height: 74px;
    transition: visibility 0.1s;
  }
  .el-menu {
    width: $sideBarWidth;
    border-right: none;
  }
  &.hideSidebar {
    width: $hideSideBarWidth !important;
    transition: width 0.28s;
    .el-menu {
      width: $hideSideBarWidth !important;
    }
    .title {
      visibility: hidden;
    }
    .submenu-title-noDropdown {
      padding-left: 10px !important;
      position: relative;
      span {
        height: 0;
        width: 0;
        overflow: hidden;
        visibility: hidden;
        transition: opacity 0.3s cubic-bezier(0.55, 0, 0.1, 1);
        opacity: 0;
        display: inline-block;
      }
      &:hover {
        span {
          display: block;
          border-radius: 3px;
          z-index: 1002;
          width: 140px;
          height: 56px;
          visibility: visible;
          position: absolute;
          right: -145px;
          text-align: left;
          text-indent: 20px;
          top: 0px;
          opacity: 1;
        }
      }
    }
    .el-submenu {
      & > .el-submenu__title {
        padding-left: 10px !important;
        & > span {
          display: none;
        }
        .el-submenu__icon-arrow {
          display: none;
        }
      }
      .nest-menu {
        .el-submenu__icon-arrow {
          display: block !important;
        }
        span {
          display: inline-block !important;
        }
      }
    }
    .el-menu-item,
    .el-tooltip {
      padding-left: 10px !important;
      width: 36px !important;
    }
  }
}
</style>
