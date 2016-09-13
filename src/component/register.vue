<template>
    <div class="register">
        <form>
            <div class="group-inputs">
                <div class="input-wrapper">
                    <input type="text"
                           name="username"
                           placeholder="用户名"
                           v-model="current.username"/>
                </div>
                <div class="input-wrapper">
                    <input type="text"
                           name="phone"
                           placeholder="手机号"
                           v-model="current.phone"/>
                </div>
                <div class="input-wrapper">
                    <input type="password"
                           name="password"
                           placeholder="密码"
                           v-model="current.password"/>
                </div>
                <div class="input-wrapper">
                    <input type="text"
                           name="repassword"
                           placeholder="重复密码"
                           v-model="current.repassword"/>
                </div>
                <div class="input-wrapper">
                    <input type="text"
                           name="sid"
                           placeholder="学号"
                           v-model="current.sid"/>
                </div>
                <div class="input-wrapper">
                    <input type="text"
                           name="email"
                           placeholder="Em@il"
                           v-model="current.email"/>
                </div>

            </div>
            <div class="command">
                <button class="button"
                        type="submit"
                        @click.prevent="register">
                    Register
                </button>
                <button class="button"
                        type="reset"
                        @click.prevent="reset">
                    Reset
                </button>
            </div>
        </form>
    </div>
</template>

<style src="./common-css/page.css" scoped>
</style>

<script>
    class RegisterUser {
        constructor() {
            this.username = '';
            this.password = '';
            this.repassword = '';
            this.phone = '';
            this.sid = '';
            this.email = '';
        }

        reset() {
            this.username = '';
            this.password = '';
            this.repassword = '';
            this.phone = '';
            this.sid = '';
            this.email = '';
        }
    }
    export default {
        name: 'Register',
        methods: {
            reset(){
                this.current.reset();
            }
        },
        vuex: {
            getters: {
                getLog: ({state}) => state.logged
            },
            actions:{

            }
        },
        data(){
            return {
                current: new RegisterUser()
            };
        }
    };
</script>

