<template>
    <div class="login">
        <form action="/register">
            <div class="group-inputs">
                <div class="input-wrapper">
                    <input type="text" placeholder="用户名"/>
                </div>
                <div class="input-wrapper">
                    <input type="password" placeholder="密码"/>
                </div>
            </div>
            <div class="command">
                <button class="button" type="submit">
                    Login
                </button>
            </div>
            <div class="login-config">
                <label class="remember-me">
                    <input type="checkbox">记住我</input>
                </label>
                <a class="unable-login">无法登录?</a>
            </div>
        </form>
    </div>
</template>

<style scoped>

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 500ms ease-in-out;
    }

    .fade-enter,
    .fade-leave-active{
        opacity: 0;
    }

</style>


<script type="text/jsx">
    export default {
        name: 'login',
        methods: {
            async login(){
                let json = await this.$http.post('/login', JSON.stringify({
                    username: 'hezhiyu',
                    password: 'baozi',
                })).then(res => res.json());
                this.name = json.username;
            }
        },
        data(){
            return {
                name: '',
                show: true
            }
        }
    };
</script>