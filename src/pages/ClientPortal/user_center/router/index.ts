import Vue from 'vue'
import VueRouter from 'vue-router'
import LayOut from "../views/layout/LayOut.vue"
import "babel-polyfill"

Vue.use(VueRouter);

const routerMap = [
  {
    name: 'Test',
    path: '/test.html',
    component: LayOut
  },
  {
    name: "Dashboard",
    path: '/',
    redirect: '/home',
    component: LayOut,
    children: [
      {
        path: 'home',
        component: () => import('../views/home/index.vue')
      },
      {
        path: 'setting',
        component: () => import('../views/setting/index.vue')
      },
      {
        path: 'deposit',
        component: () => import('../views/deposit/index.vue')
      }
    ]
  }
];
let routes: any = routerMap;
let rr = new VueRouter({
  // mode: 'history',
  routes
});
export default rr
