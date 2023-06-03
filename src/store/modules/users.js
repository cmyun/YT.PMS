import { userService } from '../../services';

const state = {
  users: [],
  apiStatus: {
    addUsers: {
      error: false,
      message: null
    }
  }
}

const actions = {
  getUsers({ dispatch, commit }) {
    userService.getUsers()
      .then(
        users => {
          commit('setUsers', users);
        }
      );
  },
  addUsers({ dispatch, commit }, ids) {
    userService.addUsers(ids)
      .then(
        users => {
          commit('addUsersSuccess', users);
          dispatch('alert/success', 'Add success', { root: true });
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
    state.apiStatus.addUsers.error = false;
    state.apiStatus.addUsers.message = null;
  },
  addUsersFailure(state, error) {
    state.apiStatus.addUsers.error = true;
    state.apiStatus.addUsers.message = error;
  }
};

export const users = {
  namespaced: true,
  state,
  actions,
  mutations
};
