import Vue from 'vue';
import Vuex from 'vuex';

import { alert } from './modules/alert';
import { account } from './modules/account';
import { members } from './modules/members';
import { member } from './modules/member';
import { positions } from './modules/positions';
import { types } from './modules/types';
import { levels } from './modules/levels';
import { organizations } from './modules/organizations';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    alert,
    account,
    members,
    member,
    positions,
    types,
    levels,
    organizations
  }
});
