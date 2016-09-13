import Vue from 'vue';
import App from './App.vue';
import router from './routes';
import Resource from 'vue-resource';
import store from './vuex/store.js';

new Vue({
    router,
    render: h => h(App),
    store
}).$mount('#app');
