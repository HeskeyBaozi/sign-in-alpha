<template>
    <div class="detail">
        <ul>
            <li v-for="(value, key) in msg">
                {{ key }} : {{ value }}
            </li>
        </ul>
    </div>
</template>

<style src="./common-css/page.css" scoped>
</style>

<script>
    export default {
        name: 'Detail',
        created(){
            this.msg = {
                hello: 'word',
                fuck: 'you'
            }
        },
        data(){
            return {
                msg: 'hello vue'
            }
        }
    }
</script>
