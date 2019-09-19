import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
const routerMap = [
    {
        name: "login",
        path: '/login',
        component: () => import('../views/Login.vue')
    },
    {
        name: "layout",
        path: '/layout',
        component: () => import('../views/LayOut.vue')
    }
];
let routes: any = routerMap;
let rr = new Router({
    mode: 'history',
    routes
});
export default rr
