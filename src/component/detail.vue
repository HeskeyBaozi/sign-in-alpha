<template>
    <div class="detail">
        <ul>
            <li v-for="(value, key) in currentUserInfo">
                {{ key }} : {{ value }}
            </li>
        </ul>
    </div>
</template>

<style src="./common-css/page.css" scoped>
</style>

<script>
    import {currentUserInfo} from '../vuex/getters.js';

    export default {
        name: 'Detail',
        vuex: {
            getters: {
                currentUserInfo
            }
        }
    }
</script>
