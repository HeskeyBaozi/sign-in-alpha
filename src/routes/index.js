'use strict';

import Vue from 'vue'
import Router from 'vue-router'

/**
 * Pages
 */
import Login from '../component/login.vue';
import Register from '../component/register.vue';
import Detail from '../component/detail.vue';

Vue.use(Router);

/**
 * Vuex
 */

import store from '../vuex/store.js';

const router = new Router({
    mode: 'hash',
    routes: [
        {
            name: 'login',
            path: '/login',
            component: Login,
        },
        {
            name: 'register',
            path: '/register',
            component: Register
        },
        {
            name: 'detail',
            path: '/detail',
            component: Detail,
            meta: {
                auth: true
            }
        }
    ]
});

router.beforeEach((route, redirect, next) => {
    console.log('现在是否登录了', store.state.logged);
    if (route.matched.some(m => m.meta.auth) && !store.state.logged) {
        console.log('开始跳转');
        redirect('/login');
    } else {
        next();
    }
});


export default router;