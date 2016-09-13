'use strict';

import Vue from 'vue';
import Vuex from 'vuex';
import * as T from './mutation-types.js';

Vue.use(Vuex);

const state = {
    currentUser: {},
    logged: false
};

const mutations = {
    [T.LOG_IN](state, userObject){
        state.logged = true;
        state.currentUser = userObject;
    },
    [T.LOG_OUT](state){
        state.logged = false;
        state.currentUser = {};
    },
    [T.REGISTER](state, registerObj){
        state.logged = true;
        state.currentUser = registerObj;
    }
};

const store = new Vuex.Store({
    state,
    mutations
});

export default store;