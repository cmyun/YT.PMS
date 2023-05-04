import Vue from 'vue';
import Vuex from 'vuex';

import { alert } from './modules/alert';
import { account } from './modules/account';
import { members } from './modules/members';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    alert,
    account,
    members
  }
});
