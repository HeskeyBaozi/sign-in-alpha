<template>
    <div class="template-root">

        <!-- Header --->
        <header>
            <h1>LOGO</h1>
            <h2>
                与师姐分享你的知识, 经验和见解 ♂
            </h2>
        </header>

        <!-- Main --->
        <main class="container-wrap">
            <nav>
                <div class="navs-slider">
                    <router-link to="/register">Register</router-link>
                    <router-link to="/login">Login</router-link>
                    <router-link to="/detail">detail</router-link>
                    <span class="navs-slider-bars">
                    </span>
                </div>
            </nav>
            <transition name="fade"
                        mode="out-in"
                        enter-active-class="animated time fadeInRight"
                        leave-active-class="animated time fadeOutLeft">
                <router-view>
                    <!-- Router View --->
                </router-view>
            </transition>
        </main>

        <!-- Footer --->
        <footer>
            <div>
                <p>Current route path: {{$route.path}}</p>
                <!-- `stringify` is a method provided by you -->
                <p>Current route params: {{JSON.stringify($route.params)}}</p>
            </div>
        </footer>
    </div>
</template>

<script>
    /**
     * Header
     */
    import MyHeader from './component/header.vue';

    /**
     * Pages
     */
    import Login from './component/login.vue';
    import Register from './component/register.vue';
    import Detail from './component/detail.vue';

    export default {
        name: 'App',
        component: {
            Login,
            Register,
            Detail
        }
    }
</script>


<style src="./component/common-css/animate.css">
    /* Animate.css */
</style>

<style src="normalize.css">
    /* Normalize.css */
</style>

<style>

    /* Root Node Style */
    html {
        font-size: 62.5%;
        box-sizing: border-box;
    }

    body {
        font-size: 1.5em;
        font-family: Consolas, 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif;
    }

    .template-root {
        padding: 10em calc(50% - 15em);
        text-align: center;
    }

    /**
     * control the animation time when the route changes.
     */
    .time {
        -webkit-animation-duration: 200ms;
        animation-duration: 200ms;
    }

    /* nav */
    nav {
        margin: 1em 0;
    }

    nav a {
        display: inline-block;
        padding: 1px 0;
        font-size: 1.5em;
        opacity: 0.5;
        width: 6em;
        height: 1em;
        text-decoration: none;
        color: #5e5e5e;
        transition: all 200ms ease-out;
    }

    nav a:hover {
        background-color: #464646;
        color: #cccccc;
    }
</style>
