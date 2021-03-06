import Vue from 'vue'
import VueRouter, { Route } from 'vue-router'
import LayOut from "../views/layout/LayOut.vue"
import "babel-polyfill"

Vue.use(VueRouter);

const routerMap = [
  {
    name: 'Test',
    path: '/test',
    component: LayOut
  },
  {
    name: "Dashboard",
    path: '/',
    redirect: '/dashboard',
    component: LayOut,
    children: [
      {
        name: "Dashboard",
        path: 'dashboard',
        component: () => import/* webpackChunkName: "dashboard" */('../views/dashboard/index.vue')
      },
      {
        name: "Setting",
        path: 'setting',
        component: () => import/* webpackChunkName: "setting" */('../views/setting/index.vue')
      },
      {
        name: "Deposit",
        path: 'deposit',
        component: () => import/* webpackChunkName: "deposit" */('../views/deposit/index.vue')
      },
      {
        name: "MarketOutlook",
        path: 'marketoutlook',
        component: () => import/* webpackChunkName: "marketOutlook" */('../views/marketOutlook/index.vue')
      }
    ]
  }
];
let router = new VueRouter({
  // mode: 'history',
  routes: routerMap
});

router.beforeEach((to: Route, from: Route, next: any) => {
  next()
});

router.afterEach(() => {

});

export default router
