import Vue from 'vue'
import Router from 'vue-router'
// import Layout from "../views/Layout.vue"
// import Layout2 from "../views/Layout2.vue"
import "babel-polyfill";

Vue.use(Router);

export default new Router({
    // mode: 'history',
    // scrollBehavior: (to, from, savedPosition) => {
    //     return {x: 0, y: 0}
    // },
    // routes: [
    //     {
    //         path: '/',
    //         component: Layout2,
    //         redirect: '/',
    //         children: [
    //             {
    //                 path: '/recharge/index',
    //                 component: () => import( '@/pages/nnn/front_user/views/Recharge.vue')
    //             },
    //             {
    //                 path: '/recharge/sweepCode/:orderNo',
    //                 props: true,
    //                 component: () => import( '@/pages/nnn/front_user/views/RechargeScanCode.vue')
    //             },
    //             {
    //                 path: '/recharge/rechargeSuccess/:orderNo',
    //                 props: true,
    //                 component: () => import( '@/pages/nnn/front_user/views/RechargeSuccess.vue')
    //             },
    //             {
    //                 path: '/recharge/rechargeError',
    //                 props: true,
    //                 component: () => import( '@/pages/nnn/front_user/views/RechargeError.vue')
    //             },
    //             {
    //                 path: '/cashWithdrawal',
    //                 props: true,
    //                 component: () => import( '@/pages/nnn/front_user/views/CashWithdrawal.vue')
    //             }
    //         ]
    //     },
    //     {
    //         path: '/',
    //         component: Layout,
    //         redirect: '/personalinfo',
    //         children: [
    //             {
    //                 path: 'personalinfo',
    //                 component: () => import( '@/pages/nnn/front_user/views/PersonalInfo.vue'),
    //                 meta: {
    //                     checked: 1,
    //                     bread: [{path: '/personalinfo', title: '个人中心'}, {path: '/personalinfo', title: '个人资料'}]
    //                 }
    //             },
    //             {
    //                 path: 'accountsecurity',
    //                 component: () => import( '@/pages/nnn/front_user/views/AccountSecurity.vue'),
    //                 meta: {
    //                     checked: 2,
    //                     bread: [{path: '/personalinfo', title: '个人中心'}, {path: '/accountsecurity', title: '账户安全'}]
    //                 }
    //             },
    //             {
    //                 path: 'myorder',
    //                 component: () => import( '@/pages/nnn/front_user/views/MyOrder.vue'),
    //                 meta: {
    //                     checked: 3,
    //                     bread: [{path: '/personalinfo', title: '个人中心'}, {path: '/myorder', title: '我的订单'}]
    //                 }
    //             },
    //             {
    //                 path: 'orderPlayerDetail',
    //                 component: () => import( '@/pages/nnn/front_user/views/OrderPlayerDetail.vue'),
    //                 meta: {
    //                     checked: 3,
    //                     bread: [{path: '/personalinfo', title: '个人中心'}, {path: '/myorder', title: '我的订单'}]
    //                 }
    //             },
    //             {
    //                 path: 'orderRentDetail',
    //                 component: () => import( '@/pages/nnn/front_user/views/OrderRentDetail.vue'),
    //                 meta: {
    //                     checked: 3,
    //                     bread: [{path: '/personalinfo', title: '个人中心'}, {path: '/myorder', title: '我的订单'}]
    //                 }
    //             },
    //             {
    //                 path: 'orderGameDetail',
    //                 component: () => import( '@/pages/nnn/front_user/views/OrderGameDetail.vue'),
    //                 meta: {
    //                     checked: 3,
    //                     bread: [{path: '/personalinfo', title: '个人中心'}, {path: '/myorder', title: '我的订单'}]
    //                 }
    //             },
    //             {
    //                 path: 'orderCheck',
    //                 component: () => import( '@/pages/nnn/front_user/views/OrderCheck.vue'),
    //                 meta: {
    //                     checked: 3,
    //                     bread: [{path: '/personalinfo', title: '个人中心'}, {path: '/myorder', title: '我的订单'}]
    //                 }
    //             },
    //             {
    //                 path: 'mywallet',
    //                 component: () => import( '@/pages/nnn/front_user/views/MyWallet.vue'),
    //                 meta: {
    //                     checked: 4,
    //                     bread: [{path: '/personalinfo', title: '个人中心'}, {path: '/mywallet', title: '我的钱包'}]
    //                 }
    //             },
    //             {
    //                 path: 'myattention',
    //                 component: () => import( '@/pages/nnn/front_user/views/MyAttention.vue'),
    //                 meta: {
    //                     checked: 6,
    //                     bread: [{path: '/personalinfo', title: '个人中心'}, {path: '/myattention', title: '我的关注'}]
    //                 }
    //             },
    //             {
    //                 path: 'mynotice',
    //                 component: () => import( '@/pages/nnn/front_user/views/MyNotice.vue'),
    //                 meta: {
    //                     checked: 12,
    //                     bread: [{path: '/personalinfo', title: '个人中心'}, {path: '/mynotice', title: '我的消息'}]
    //                 }
    //             },
    //             {
    //                 path: 'mycoupon',
    //                 component: () => import( '@/pages/nnn/front_user/views/MyCoupon.vue'),
    //                 meta: {
    //                     checked: 5,
    //                     bread: [{path: '/personalinfo', title: '个人中心'}, {path: '/mycoupon', title: '我的优惠劵'}]
    //                 }
    //             },
    //             {
    //                 path: 'myapply',
    //                 component: () => import( '@/pages/nnn/front_user/views/MyApply.vue'),
    //                 meta: {
    //                     checked: 11,
    //                     bread: [{path: '/personalinfo', title: '个人中心'}, {path: '/myapply', title: '入驻审核'}]
    //                 }
    //             },
    //             {
    //                 path: 'peiwaninfo',
    //                 component: () => import( '@/pages/nnn/front_user/views/PeiwanInfo.vue'),
    //                 meta: {
    //                     checked: 7,
    //                     bread: [{path: '/peiwaninfo', title: '陪玩管理'}, {path: '/peiwaninfo', title: '陪玩资料'}]
    //                 }
    //             },
    //             {
    //                 path: 'servicemanage',
    //                 component: () => import( '@/pages/nnn/front_user/views/ServiceManage.vue'),
    //                 meta: {
    //                     checked: 8,
    //                     bread: [{path: '/peiwaninfo', title: '陪玩管理'}, {path: '/servicemanage', title: '服务管理'}]
    //                 }
    //             },
    //             {
    //                 path: 'editplayerserver',
    //                 component: () => import( '@/pages/nnn/front_user/views/EditPlayerServer.vue'),
    //                 meta: {
    //                     checked: 8,
    //                     bread: [{path: '/peiwaninfo', title: '陪玩管理'}, {path: '/servicemanage', title: '服务管理'}]
    //                 }
    //             },
    //             {
    //                 path: 'addplayerserver',
    //                 component: () => import( '@/pages/nnn/front_user/views/AddPlayerServer.vue'),
    //                 meta: {
    //                     checked: 8,
    //                     bread: [{path: '/peiwaninfo', title: '陪玩管理'}, {path: '/servicemanage', title: '服务管理'}]
    //                 }
    //             },
    //             {
    //                 path: 'ordermanage',
    //                 component: () => import( '@/pages/nnn/front_user/views/OrderManage.vue'),
    //                 meta: {
    //                     checked: 9,
    //                     bread: [{path: '/peiwaninfo', title: '陪玩管理'}, {path: '/ordermanage', title: '接单管理'}]
    //                 }
    //             },
    //             // 接单管理里面
    //             {
    //                 path: 'receiptDetail',
    //                 component: () => import( '@/pages/nnn/front_user/views/ReceiptDetail.vue'),
    //                 meta: {
    //                     checked: 9,
    //                     bread: [{path: '/peiwaninfo', title: '陪玩管理'}, {path: '/ordermanage', title: '接单管理'}]
    //                 }
    //             },
    //             {
    //                 path: 'userinvite',
    //                 component: () => import( '@/pages/nnn/front_user/views/UserInvite.vue'),
    //                 meta: {
    //                     checked: 10,
    //                     bread: [{path: '/peiwaninfo', title: '陪玩管理'}, {path: '/userinvite', title: '邀请有礼'}]
    //                 }
    //             },
    //         ]
    //     }
    // ]
})
