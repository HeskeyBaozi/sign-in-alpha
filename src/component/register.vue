<template>
    <div class="register">
        <form action="/register">
            <group-inputs :list="list"></group-inputs>
            <div class="command">
                <button class="button" type="submit">
                    Register
                </button>
                <button class="button" type="reset">
                    Reset
                </button>
            </div>
        </form>
    </div>
</template>

<script type="text/jsx">
    import groupInputs from './tiny-component/group-inputs.vue';

    class Li {
        constructor(name, placeholder, type) {
            this.name = name;
            this.placeholder = placeholder;
            this.type = type;
        }
    }

    export default {
        name: 'Register',
        data(){
            return {
                list: [
                    new Li('username', '用户名o', 'text'),
                    new Li('phone', '手机号', 'text'),
                    new Li('password', '密码', 'password'),
                    new Li('repeated-password', '重复密码', 'password'),
                    new Li('sid', '学号', 'text'),
                    new Li('email', 'Email', 'text'),
                ]
            };
        },
        components: {
            groupInputs
        }
    }
    ;
</script>

<style>
    .command {
        margin: 2em 0 0 0;
    }

    .button {
        display: inline-block;
        width: 10em;
        padding: .3em .8em;
        border: 1px solid #cccccc;
        background-color: #ffffff;
        border-radius: .2em;
        color: #5e5e5e;

        font-size: 1em;
        line-height: 1.5;

        transition: color, background-color 200ms ease-out;
    }

    .button:hover {
        background-color: #6e6e6e;
        color: white;
    }

</style>