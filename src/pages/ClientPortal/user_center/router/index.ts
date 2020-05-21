import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const routerMap = [
  {
    name: 'Test',
    path: '/test.html',
    component: () => import('../views/layout/LayOut.vue')
  },
  {
    name: 'UserCenter',
    path: '/user_center/index.html',
    component: () => import('../views/layout/LayOut.vue')
  },
  {
    name: "LayOut",
    path: '/layout',
    component: () => import('../views/layout/LayOut.vue'),
    children: [
      {
        path: 'home',
        component: () => import('../views/home/index.vue')
      },
      {
        path: 'club',
        component: () => import('../views/setting/index.vue')
      }
    ]
  }
];
let routes: any = routerMap;
let rr = new Router({
  mode: 'history',
  routes
});
export default rr
