<template>
    <div id="app">
        <my-header :level="2"/>
        <router-link :to="{ path: '/signup' }">Go to signup</router-link>
        <router-link to="/register">Go to register</router-link>
        <router-view />
    </div>
</template>

<script>
    import MyHeader from './component/header.vue';
    import SignUp from './component/sign-up.vue';
    import Register from './component/register.vue';
    import router from './routes'

    export default {
        name: 'App',
        data () {
            return {
                msg: 'Hello Vue!!!!',
                num: 1
            };
        },
        components: {
            MyHeader, SignUp, Register
        }
    }
</script>

<style>
    body {
        font-family: Consolas, Helvetica, sans-serif;
    }
</style>
