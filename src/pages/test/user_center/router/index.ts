import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const rootUrl = '@/pages/test/user_center/views/';
const routerMap = [
    {
        name: "login",
        path: '/login',
        component: () => import(rootUrl + 'Login.vue')
    },
    {
        path: '/user_cener/index.html',
        redirect: '/user_center/layout',
        component: () => import('@/pages/test/user_center/views/LayOut.vue')
    },
    {
        name: "layout",
        path: '/layout',
        component: () => import('@/pages/test/user_center/views/LayOut.vue'),
        children: [
            {
                path: 'home',
                component: () => import ('@/pages/test/user_center/views/Home.vue')
            },
            {
                path: 'club',
                component: () => import ('@/pages/test/user_center/views/Club.vue')
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
