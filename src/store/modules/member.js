import { userService } from '../../services';

const state = {
  member: [],
  apiStatus: {
    updateUser: {
      error: false,
      message: null
    },
    updateProfile: {
      error: false,
      message: null
    }
  }
}
const actions = {
  getMemberInfo({ dispatch, commit }, id) {
    userService.getInfoById(id)
      .then(
        member => {
          commit('setMember', member);
        }
      );
  },
  updateUser({ dispatch, commit }, user) {
    userService.update(user)
      .then(
        user => {
          commit('updateSuccess', user);
          dispatch('alert/success', 'Update successful', { root: true });
        },
        error => {
          commit('updateFailure', error);
          dispatch('alert/error', error, { root: true });
        }
      );
  },
  updateProfile({ dispatch, commit }, user) {
    userService.updateProfile(user)
      .then(
        user => {
          commit('updateProfileSuccess', user);
          dispatch('alert/success', 'Update successful', { root: true });
        },
        error => {
          commit('updateProfileFailure', error);
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
    const newUser = {...state.member, ...member}
    state.member = newUser;
    state.apiStatus.updateUser.error = false;
    state.apiStatus.updateUser.message = null;
  },
  updateFailure(state, error) {
    state.apiStatus.updateUser.error = true;
    state.apiStatus.updateUser.message = error;
  },
  updateProfileSuccess(state, member) {
    state.member = member;
    state.apiStatus.updateProfile.error = false;
    state.apiStatus.updateProfile.message = null;
  },
  updateProfileFailure(state, error) {
    state.apiStatus.updateProfile.error = true;
    state.apiStatus.updateProfile.message = error;
  },
};

export const member = {
  namespaced: true,
  state,
  actions,
  mutations
};
