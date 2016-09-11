'use strict';

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        currentUser: {},
        logged: false
    },
    mutations: {
        Login(state, userObject){
            state.logged = true;
            state.currentUser = userObject;
        },
        Logout(state, userObject){
            state.logged = false;
            state.currentUser = {};
        }
    }
});

export default store;