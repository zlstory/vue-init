<template>
  <table class="mailTable" :style="styleObject" v-if="s_showByRow">
    <tr v-for="index in rowCount" :key="index">
      <td class="column">{{ tableData[index * 2 - 2].label }}</td>
      <td>{{ tableData[index * 2 - 2].value }}</td>
      <td class="column">
        {{
          tableData[index * 2 - 1] !== undefined
            ? tableData[index * 2 - 1].label
            : ''
        }}
      </td>
      <td>
        {{
          tableData[index * 2 - 1] !== undefined
            ? tableData[index * 2 - 1].value
            : ''
        }}
      </td>
    </tr>
  </table>

  <table class="mailTable" :style="styleObject" v-else>
    <tr v-for="index in rowCount" :key="index">
      <td class="column">{{ tableData[index - 1].label }}</td>
      <td>{{ tableData[index - 1].value }}</td>
      <td class="column">
        {{
          tableData[rowCount + index - 1] !== undefined
            ? tableData[rowCount + index - 1].label
            : ''
        }}
      </td>
      <td>
        {{
          tableData[rowCount + index - 1] !== undefined
            ? tableData[rowCount + index - 1].value
            : ''
        }}
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  data() {
    return {
      styleObject: {},
      s_showByRow: true,
    };
  },
  props: ['tableData', 'tableStyle', 'showByRow'],
  computed: {
    rowCount: function() {
      //12345    length =10
      return Math.ceil(this.tableData.length / 2);
    },
  },
  created() {
    this.styleObject = this.tableStyle;
    if (this.showByRow !== undefined) {
      this.s_showByRow = this.showByRow;
    }
  },
};
</script>
<style lang="scss" scoped>
.mailTable {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.65);
  border: 1px solid #ccc;
}
.mailTable tr {
  border-bottom: 1px solid #000 !important;
}
.mailTable tr td {
  border-bottom: 1px solid #e6eaee;
  border-right: 1px solid #e6eaee;
  width: 150px;
  height: 35px;
  line-height: 35px;
  box-sizing: border-box;
  padding: 0 10px;
}
.mailTable tr td.column {
  background-color: rgba(250, 250, 250, 1);
  color: #333;
  font-weight: 600;
}
</style>
