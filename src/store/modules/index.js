import Vue from 'vue';
import Vuex from 'vuex';

import { alert } from './modules/alert';
import { account } from './modules/account';
import { members } from './modules/members';
import { member } from './modules/member';
import { users } from './modules/users';
import { positions } from './modules/positions';
import { types } from './modules/types';
import { levels } from './modules/levels';
import { organization } from './modules/organization';
import { organizations } from './modules/organizations';
import { groups } from './modules/groups';
import { group } from './modules/group';
import { tasks } from './modules/tasks';
import { task } from './modules/task';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    alert,
    account,
    members,
    member,
    users,
    positions,
    types,
    levels,
    organization,
    organizations,
    groups,
    group,
    tasks,
    task
  }
});
