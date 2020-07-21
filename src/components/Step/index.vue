<template>
  <div class="step-wrapper">
    <div
      v-for="(item, index) in stepsData"
      :key="item.id"
      class="step-item"
      :class="activeStep >= index ? 'active' : ''"
    >
      <span>{{ index + 1 }}</span>
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step',
  props: {
    activeStep: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      stepsData: [
        {
          title: '填写基本信息',
        },
        {
          title: '上传附件资料',
        },
        {
          title: '提交结果',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.step-wrapper {
  width: 100%;
  display: flex;
  .step-item {
    font-size: 14px;
    margin-right: 24px;
    color: rgba(0, 0, 0, 0.35);

    span {
      display: inline-block;
      width: 24px;
      height: 24px;
      box-sizing: border-box;
      padding: 0;
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, 0.35);
      margin-right: 12px;
      text-align: center;
      color: rgba(0, 0, 0, 0.35);
      line-height: 22px;
    }
  }

  .step-item:after {
    content: '';
    display: inline-block;
    width: 80px;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.35);
    transform: translateY(-4px);
  }
  .step-item:last-child {
    &:after {
      display: none;
    }
  }

  .step-item.active {
    color: rgba(79, 152, 255, 1);
    span {
      background: rgba(79, 152, 255, 1);
      border-color: rgba(79, 152, 255, 1);
      color: rgba(255, 255, 255, 1);
    }
    &:after {
      background: rgba(79, 152, 255, 1);
    }
  }
}
</style>
