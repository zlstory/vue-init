<template>
  <div class="main-banner">
    <img :src="bannerUrl" class="banner" />
  </div>
</template>

<script>
import homeBanner from '@/assets/images/home_banner.png';
import cashStep from '@/assets/images/cash_step_banner.png';
import cashList from '@/assets/images/cash_list_banner.png';
import cashResult from '@/assets/images/cash_result_banner.png';
import Policy from '@/assets/images/policy_banner.png';
import PolicyDetail from '@/assets/images/policy_banner.png';
import Notice from '@/assets/images/notice_banner.png';
import NoticeDetail from '@/assets/images/notice_detail_banner.png';
import personal from '@/assets/images/personal_banner.png';
import myApply from '@/assets/images/myApply_banner.png';
import myNews from '@/assets/images/news_banner.png';
import applyGuide from '@/assets/images/apply_zhinan_banner.png';

export default {
  name: 'Banner',
  data() {
    return {
      bannerUrl: homeBanner,
      bannerList: [
        {
          name: 'home',
          bannerUrl: homeBanner,
        },
        {
          name: 'cashList',
          bannerUrl: cashList,
        },
        {
          name: 'cashStep',
          bannerUrl: cashStep,
        },
        {
          name: 'cashResult',
          bannerUrl: cashResult,
        },
        {
          name: 'policyInfo',
          bannerUrl: Policy,
        },
        { name: 'policyDetail', bannerUrl: PolicyDetail },
        {
          name: 'notice',
          bannerUrl: Notice,
        },
        {
          name: 'noticeDetail',
          bannerUrl: NoticeDetail,
        },
        {
          name: 'personal',
          bannerUrl: personal,
        },
        {
          name: 'myApply',
          bannerUrl: myApply,
        },
        {
          name: 'myNews',
          bannerUrl: myNews,
        },
        {
          name: 'cashGuide',
          bannerUrl: applyGuide,
        },
      ],
    };
  },
  created() {
    const findBannerUrl = this.bannerList.find(item => {
      return item.name === this.$route.name;
    });
    this.bannerUrl = findBannerUrl.bannerUrl;
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
.main-banner {
  width: 100%;
  height: 275px;
  .banner {
    width: 100%;
    height: 100%;
  }
}
</style>
