<template>
    <div class="template-root">
        <main class="container-wrap">
            <header>LOGO</header>
            <main>
                <nav>
                    <div class="navs-slider">
                        <router-link to="/register">Register</router-link>
                        <router-link to="/login">Login</router-link>
                        <span class="navs-slider-bars">
                        </span>
                    </div>
                </nav>
                <transition name="fade"
                            mode="out-in"
                            enter-active-class="animated time fadeInRight"
                            leave-active-class="animated time fadeOutLeft">
                    <router-view></router-view>
                </transition>
            </main>
        </main>
        <footer>
            footer
        </footer>
    </div>
</template>

<script>
    import MyHeader from './component/header.vue';
    import Login from './component/login.vue';
    import Register from './component/register.vue';


    export default {
        name: 'App',
        component: {
            Login,
            Register
        }
    }
</script>

<style src="./component/common-css/animate.css">

</style>

<style src="normalize.css">

</style>


<style>
    html {
        font-size: 62.5%;
        box-sizing: border-box;
    }

    body {
        font-size: 1.5em;
        font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif;
    }

    .container-wrap {
        padding: 10em calc(50% - 15em);
        text-align: center;
    }




    .time {
        -webkit-animation-duration: 50ms;
        animation-duration: 50ms;
    }
</style>
