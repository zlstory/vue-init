<template>
  <el-table
    :data="tableData"
    stripe
    fit
    empty-text="暂无数据"
    style="width: 100%;"
    show-overflow-tooltip
    :header-cell-style="headerCellStyle"
    :cell-style="cellStyle"
    @cell-click="cellClick"
    :border="bordered"
    :show-header="showHeader"
  >
    <el-table-column
      v-for="item in tableLabel"
      :key="item.prop"
      :prop="item.prop"
      :label="item.label"
      :width="item.width"
      show-overflow-tooltip
    >
      <template slot-scope="scope">{{ scope.row[item.prop] }}</template>
    </el-table-column>
    <slot></slot>
  </el-table>
</template>

<script>
export default {
  name: 'CommonTable',
  props: {
    tableLabel: {
      type: Array,
      default: function() {
        return [];
      },
    },
    tableData: {
      type: Array,
      default: function() {
        return [];
      },
    },
    bordered: {
      type: Boolean,
      default: function() {
        return false;
      },
    },
    showHeader: {
      type: Boolean,
      default: function() {
        return true;
      },
    },
    cellStyle: {
      type: [Object, Function],
      default: function() {
        return { textAlign: 'center' };
      },
    },
    headerCellStyle: {
      type: [Object, Function],
      default: function() {
        return {
          height: '54px',
          background: 'rgba(250,250,250,1)',
          color: 'rgba(0, 0, 0, 0.85)',
          textAlign: 'center',
        };
      },
    },
  },
  data() {
    return {
      // headerCellStyle: {
      //   height: '54px',
      //   background: 'rgba(250,250,250,1)',
      //   color: 'rgba(0, 0, 0, 0.85)',
      //   textAlign: 'center'
      // }
    };
  },
  methods: {
    cellClick(row, column, cell, event) {
      // console.log(row, column, cell, event)
      this.$emit('cellClick', row, column, cell, event);
    },
  },
};
</script>
