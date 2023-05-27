import { userService } from '../../services';

const state = {
  status: null,
  users: []
}

const actions = {
  getUsers({ dispatch, commit }) {
    userService.getUsers()
      .then(
        users => {
          commit('setUsers', users);
        },
        error => {
          dispatch('alert/error', error, { root: true });
        }
      );
  },
  addUsers({ dispatch, commit }, ids) {
    userService.addUsers()
      .then(
        users => {
          commit('addUsersSuccess', users);
        },
        error => {
          commit('addUsersFailure', error);
          dispatch('alert/error', error, { root: true });
        }
      );
  },
 
};

const mutations = {
  setUsers(state, users) {
    state.users = users
  },
  addUsersSuccess(state, users) {
    
  },
  addUsersFailure(state, users) {
    state.status = 'error';
  },
  
};

export const users = {
  namespaced: true,
  state,
  actions,
  mutations
};
