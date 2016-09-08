'use strict';

export const setCurrentUserInfo = ({dispatch}, userObject) => {
    dispatch('SetCurrentUserInfo', userObject);
};