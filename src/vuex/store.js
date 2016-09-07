'use strict';

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentUser: {
            username: 'Hezhiyu',
            sid: 'topicof',
            email: 'emailffff',
            phone: '165461'
        }
    },
    mutations: {
        SetCurrentUserInfo(state, userObject){
            state.currentUser = userObject;
        }
    }
});