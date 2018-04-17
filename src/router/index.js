import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResouce from 'vue-resource';

// 引入组件
import goods from '@/components/goods/goods';
import seller from '@/components/seller/seller';
import ratings from '@/components/ratings/ratings';

// 要告诉vue 使用vueRouter
Vue.use(VueRouter);
Vue.use(VueResouce);
const routes = [
  {
    path: '/goods',
    component: goods
  },
  {
    path: '/seller',
    component: seller
  },
  {
    path: '/ratings',
    component: ratings
  },
  {
    path: '/',
    redirect: '/goods'
  }
];
var router = new VueRouter({
  linkActiveClass: 'active',
  routes
});
export default router;
