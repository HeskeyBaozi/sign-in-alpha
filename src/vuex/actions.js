'use strict';

export const login = ({dispatch}, userObject)=> {
    dispatch('Login', userObject);
};