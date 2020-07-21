import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// import 'normalize.css/normalize.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/style/global.scss';
Vue.use(ElementUI);

import '@/assets/style/cover.scss';

import SvgIcon from '@/components/SvgIcon';
// 全局svg图标组件 使用方法
Vue.component('svg-icon', SvgIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
