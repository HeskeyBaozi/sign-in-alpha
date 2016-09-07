<template>
    <div class="register">
        <form action="/register">
            <group-inputs :list="list"/>
            <launchers :btns="btns"/>
        </form>

    </div>
</template>

<script type="text/jsx">

    /**
     * groups-inputs
     */
    import groupInputs from './group-inputs/group-inputs';
    import Li from './group-inputs/Li.class.js';

    /**
     * Launchers
     */
    import launchers from './launchers/launchers';
    import Btn from './launchers/Btn.js';

    export default {
        name: 'Register',
        data(){
            return {
                list: [
                    new Li('username', '用户名', 'text'),
                    new Li('phone', '手机号', 'text'),
                    new Li('password', '密码', 'password'),
                    new Li('repeated-password', '重复密码', 'password'),
                    new Li('sid', '学号', 'text'),
                    new Li('email', 'Email', 'text'),
                ],
                btns: [
                    new Btn('submit', 'Register', (e)=>{
                        e.preventDefault();
                        console.log(e.target);
                    }),
                    new Btn('reset', 'Reset', ()=>console.log('Reset'))
                ]
            };
        },
        components: {
            groupInputs,
            launchers
        }
    };
</script>

<style>

</style>