// import Vue from 'vue';
// import Vuex from 'vuex';
// import { createApp } from 'vue'
import { createStore } from 'vuex'

import { alert } from './modules/alert';
import { account } from './modules/account';

// Vue.use(Vuex);

export const store = createStore({
    modules: {
        alert,
        account
    }
});