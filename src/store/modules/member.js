import { userService } from '../../services';

const state = {
  status: null,
  member: []
}

const actions = {
  getMemberInfo({ dispatch, commit }, id) {
    userService.getInfoById(id)
      .then(
        member => {
          commit('setMember', member);
        },
        error => {
          dispatch('alert/error', error, { root: true });
        }
      );
  },
  updateUser({ dispatch, commit }, user) {
    userService.update(user)
      .then(
        user => {
          commit('updateSuccess', user);
        },
        error => {
          commit('updateFailure', error);
          dispatch('alert/error', error, { root: true });
        }
      );
  }
};

const mutations = {
  setMember(state, member) {
    state.member = member
  },
  updateSuccess(state, member) {
    state.member = member
  },
  updateFailure(state, error) {
    state.status = {}
  },
};

export const member = {
  namespaced: true,
  state,
  actions,
  mutations
};
