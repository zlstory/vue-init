<template>
  <div class="common-form-wrapper">
    <el-form
      :model="form"
      ref="form"
      :label-width="labelWidth"
      :inline="form.formInline"
      label-position="left"
      v-if="form.formInline"
    >
      <el-form-item
        v-for="item in formLable"
        :prop="item.model"
        :key="item.model"
        :label="item.lable"
        :style="item.width || ''"
      >
        <div v-if="item.show">
          <el-input
            v-model="form[item.model]"
            :disabled="item.disabled === undefined ? false : item.disabled"
            :placeholder="item.placeholder"
            v-if="!item.type"
            class="el-item"
            size="small"
          ></el-input>
          <el-input
            v-model="form[item.model]"
            :placeholder="item.placeholder"
            v-if="item.type == 'textarea'"
            :type="item.type"
            :rows="2"
            class="el-item"
            size="small"
          >
          </el-input>
          <el-select
            v-if="item.type === 'select'"
            v-model="form[item.model]"
            :clearable="item.clearable === '' ? false : item.clearable"
            :placeholder="item.placeholder"
            class="item-select"
            size="small"
          >
            <el-option
              v-for="ite in item.option"
              :key="ite.value"
              :label="ite.label"
              :value="ite.value"
            >
            </el-option>
          </el-select>
          <el-switch
            size="small"
            v-if="item.type === 'switch'"
            v-model="form[item.model]"
            active-color="#13ce66"
            inactive-color="#ff4949"
            class="el-item"
          >
          </el-switch>

          <el-checkbox-group
            v-if="item.type === 'checkbox'"
            v-model="form[item.model]"
            :placeholder="item.placeholder"
            class="el-item"
          >
            <el-checkbox
              v-for="item in item.option"
              :label="item.value"
              :key="item.value"
            >
              {{ item.label }}
            </el-checkbox>
          </el-checkbox-group>
          <el-cascader
            v-if="item.type === 'address'"
            v-model="form[item.model]"
            :options="item.option"
          ></el-cascader>

          <el-date-picker
            size="small"
            v-model="form[item.model]"
            type="date"
            placeholder="选择日期"
            v-if="item.type === 'date'"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker>
          <el-time-picker
            size="small"
            v-if="item.type === 'time-picker'"
            is-range
            v-model="form[item.model]"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            placeholder="选择时间范围"
          >
          </el-time-picker>
        </div>
      </el-form-item>
      <slot></slot>
    </el-form>
    <el-form
      :model="form"
      ref="form"
      :label-width="labelWidth"
      :inline="form.formInline"
      label-position="left"
      v-if="!form.formInline"
    >
      <el-form-item
        :required="item.required === undefined ? true : item.required"
        v-for="item in formLable"
        :key="item.model"
        :prop="item.model"
        :label="item.lable"
        :style="item.width || ''"
      >
        <div v-if="item.show">
          <el-input
            v-model="form[item.model]"
            :disabled="item.disabled === undefined ? false : item.disabled"
            :placeholder="item.placeholder"
            v-if="!item.type"
            class="el-item"
          ></el-input>
          <el-input
            v-model="form[item.model]"
            :placeholder="item.placeholder"
            v-if="item.type == 'textarea'"
            :type="item.type"
            :rows="2"
            class="el-item"
          >
          </el-input>
          <el-select
            v-if="item.type === 'select'"
            :disabled="item.disabled === undefined ? false : item.disabled"
            v-model="form[item.model]"
            :placeholder="item.placeholder"
            class="item-select"
          >
            <el-option
              v-for="ite in item.option"
              :key="ite.value"
              :label="ite.label"
              :value="ite.value"
            >
            </el-option>
          </el-select>
          <el-switch
            v-if="item.type === 'switch'"
            v-model="form[item.model]"
            active-color="#13ce66"
            inactive-color="#ff4949"
            class="el-item"
          >
          </el-switch>

          <el-checkbox-group
            v-if="item.type === 'checkbox'"
            v-model="form[item.model]"
            :placeholder="item.placeholder"
            class="el-item"
          >
            <el-checkbox
              v-for="item in item.option"
              :label="item.value"
              :key="item.value"
            >
              {{ item.label }}
            </el-checkbox>
          </el-checkbox-group>

          <el-cascader
            v-if="item.type === 'address'"
            v-model="form[item.model]"
            :options="item.option"
          ></el-cascader>

          <el-date-picker
            v-model="form[item.model]"
            :disabled="item.disabled === undefined ? false : item.disabled"
            type="date"
            placeholder="选择日期"
            v-if="item.type === 'date'"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker>
          <el-time-picker
            :disabled="item.disabled === undefined ? false : item.disabled"
            v-if="item.type === 'time-picker'"
            is-range
            v-model="form[item.model]"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            placeholder="选择时间范围"
          >
          </el-time-picker>
        </div>
      </el-form-item>
      <slot></slot>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    inline: Boolean, //表单是否占据一行
    form: Object, //双向绑定的内容
    formLable: Array, //表单的各个元素
    labelWidth: {
      //表单的内容的宽度  默认80px
      type: String,
      default: 'input',
    },
    labelPosition: {
      type: String,
      default: 'left',
    },
    rules: {
      type: Object,
      default: function() {
        return {};
      },
    },
  },
  data() {
    return {
      required: true,
    };
  },
};
</script>

<style lang="scss">
.common-form-wrapper {
  .el-form--inline .el-form-item {
    margin-right: 20px;
  }
  .el-form-item__content {
    margin-left: 100px !important;
  }
  .item-select {
    width: 100%;
  }
}
</style>
