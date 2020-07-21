import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home/index';

Vue.use(Router);

export const constantRoutes = [
  {
    path: '/',
    meta: {
      title: '首页',
      icon: 'international',
    },
    component: Home,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        meta: {
          title: '用户信息',
          icon: 'dashboard',
        },
        component: () => import('@/views/User'),
      },
      {
        path: 'data',
        name: 'data',
        meta: {
          title: '数据相关',
          icon: 'documentation',
        },
        component: () => import('@/views/Data'),
      },
    ],
  },
  {
    path: '/test',
    meta: {
      title: '测试',
      icon: 'language',
    },
    component: Home,
    redirect: 'about',
    children: [
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/About'),
        meta: {
          title: '测试',
          icon: 'drag',
        },
      },
    ],
  },
];
const createRouter = () =>
  new Router({
    mode: 'history',
    scrollBehavior: () => ({
      y: 0,
    }),
    routes: constantRoutes,
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

export default router;
