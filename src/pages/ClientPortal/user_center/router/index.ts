import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routerMap = [
  {
    name: 'Test',
    path: '/test.html',
    component: () => import('../views/layout/LayOut.vue')
  },
  {
    name: "User",
    path: '/user_center',
    component: () => import('../views/layout/LayOut.vue'),
    children: [
      {
        path: 'home',
        component: () => import('../views/home/index.vue')
      },
      {
        path: 'setting',
        component: () => import('../views/setting/index.vue')
      }
    ]
  }
];
let routes: any = routerMap;
let rr = new VueRouter({
  mode: 'history',
  routes
});
export default rr
