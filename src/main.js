import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './routes';
import Resource from 'vue-resource';

Vue.use(Resource);

//Vue.use(VueRouter);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
