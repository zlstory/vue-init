import Vue from 'vue';
import Vuex from 'vuex';
import home from './modules/home';
Vue.use(Vuex);
const getters = {
  isCollapse: (state) => state.home.isCollapse,
  // navRouter: state => state.userStore.navRouter,
  // user: state => state.userStore.user,
  // ShopCarData: state => state.shopCarDataStore,
  // Authorization: state => state.loginStore.Authorization,
  // saveData: state => state.saveDataStore
};

export default new Vuex.Store({
  mutations: {},
  actions: {},
  modules: { home },
  getters,
});
