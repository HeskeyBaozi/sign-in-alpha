'use strict';

/**
 * Vuex Getters
 */
import {currentUserInfo} from '../../vuex/getters.js';

import Display from './display.js';
export default {
    name: 'Detail',
    data(){
        return {
            user: {}
        };
    },
    created(){
        this.user = this.currentUserInfo;
    },
    vuex: {
        getters: {
            currentUserInfo
        }
    },
    component: {
        Display
    },
    render(h){
        return (<Display user={this.user}/>);
    }
}
