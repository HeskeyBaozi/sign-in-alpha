import Vue from 'vue'
import Router from 'vue-router'

// Component
import Login from '../component/login.vue';
import Register from '../component/register.vue';
import Detail from '../component/detail.vue';

Vue.use(Router);

export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        {
            path:'/detail',
            component: Detail
        }
    ]
});