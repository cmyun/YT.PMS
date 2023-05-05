import { createStore } from "vuex";
import { account } from './modules/account';
import { alert } from './modules/alert';
import { members } from './modules/members';
import { positions } from './modules/positions';
import { organizations } from './modules/organizations';

export default createStore({
  modules: {
    account,
    alert,
    members,
    positions,
    organizations
  }
});

