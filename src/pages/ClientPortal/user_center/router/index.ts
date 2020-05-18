import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const routerMap = [
  {
    name: 'UserCenter',
    path: '/user_center/index.html',
    // redirect: '/user_center/home',
    component: () => import('../views/LayOut.vue')
  },
  {
    name: "LayOut",
    path: '/layout',
    component: () => import('../views/LayOut.vue'),
    children: [
      {
        path: 'home',
        component: () => import('../views/Home.vue')
      },
      {
        path: 'club',
        component: () => import('../views/Club.vue')
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
