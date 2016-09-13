'use strict';

import * as T from './mutation-types.js';
import Vue from 'vue';
import VueResource from 'vue-resource'
Vue.use(VueResource);

export const login = ({commit}, userObject) => {
    commit(T.LOG_IN, userObject);
};

export const logout = ({commit}) => {
    commit(T.LOG_OUT);
};

export const register = ({commit}, registerObj) => {
    Vue.http.post('/register', registerObj).then(res => res.json())
        .then(json => {
            commit(T.REGISTER, json)
        });
};