'use strict';

import Vue from 'vue'
import Router from 'vue-router'

/**
 * Pages
 */
import Login from '../component/login.vue';
import Register from '../component/register.vue';
import Detail from '../component/detail/detail.js';

Vue.use(Router);

const router = new Router({
    mode: 'hash',
    routes: [
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/detail',
            component: Detail
        }
    ]
});

router.beforeEach((route, redirect, next) => {
    if (route.path === '/detail') {

    }
    next();
});

export default router;