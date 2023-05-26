import { createStore } from "vuex";
import { account } from './modules/account';
import { alert } from './modules/alert';
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

export default createStore({
  modules: {
    account,
    alert,
    members,
    member,
    users,
    positions,
    types,
    levels,
    organization,
    organizations,
    groups,
    group
  }
});

