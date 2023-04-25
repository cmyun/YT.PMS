// import Vue from 'vue';
// import Vuex from 'vuex';
import { createStore } from 'vuex'

import { account } from './modules/account';
import { alert } from './modules/alert';

// Vue.use(Vuex);

export const store = createStore({
    modules: {
        account, alert
    }
});
