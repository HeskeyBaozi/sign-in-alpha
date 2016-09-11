<template>
    <div class="login">
        <form>
            <div class="group-inputs">
                <div class="input-wrapper">
                    <input type="text"
                           name="username"
                           placeholder="用户名"
                           v-model="username"/>
                </div>
                <div class="input-wrapper">
                    <input type="password"
                           name="password"
                           placeholder="密码"
                           v-model="password"/>
                </div>
            </div>
            <div class="command">
                <button class="button"
                        type="submit"
                        @click.prevent="handleLogin">
                    Login
                </button>
            </div>
            <div class="login-config">
                <label class="remember-me">
                    <input type="checkbox" name="rememer-me" v-model="remember"/>
                    记住我
                </label>
                <a class="unable-login">无法登录?</a>
            </div>
        </form>
    </div>
</template>

<style src="./common-css/page.css" scoped>
</style>

<script>
    import {login} from '../vuex/actions.js';

    export default {
        name: 'Login',
        methods: {
            handleLogin(e){
                this.$http.post('./login', {
                    username: this.username,
                    password: this.password
                }).then(res => res.json()).then(json => {
                    console.log(json);
                    if (json.type) {
                        this.login(json.info);
                    }
                });
            }
        },
        vuex: {
            actions: {
                login
            }
        },
        data(){
            return {
                username: '',
                password: '',
                remember: true
            };
        }
    };
</script>

