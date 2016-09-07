'use strict';

const actions = {
    setCurrentUserInfo({dispatch}, userObject){
        dispatch('SetCurrentUserInfo', userObject);
    }
};

export default actions;