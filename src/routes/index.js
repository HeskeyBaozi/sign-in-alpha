import Vue from 'vue'
import Router from 'vue-router'
import SignUp from '../component/sign-up.vue';
import Register from '../component/register.vue';

Vue.use(Router);

export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/signup',
            component: SignUp
        },
        {
            path: '/register',
            component: Register
        }
    ]
});