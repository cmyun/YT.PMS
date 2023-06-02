import { userService } from '../../services';

const state = {
  members: [],
  apiStatus: {
    addMember: {
      error: false,
      message: null
    },
    deleteMember: {
      error: false,
      message: null
    }
  }
}

const actions = {
  getMembers({ dispatch, commit }) {
    userService.getAll()
      .then(
        members => {
          commit('setMembers', members);
        }
      );
  },
  getMembersByOrg({ dispatch, commit }, orgId) {
    userService.getByOrg(orgId)
      .then(
        members => {
          commit('setMembers', members);
        }
      );
  },
  addMember({ dispatch, commit }, user) {
    userService.addMember(user)
      .then(
        user => {
          commit('addMemberSuccess', user);
          dispatch('alert/success', 'Add successful', { root: true });
        },
        error => {
          commit('addMemberFailure', error);
          dispatch('alert/error', error, { root: true });
        }
      );
  },
  deleteMember({ dispatch, commit }, id) {
    userService.delete(id)
      .then(
        user => {
          commit('deleteMemberSuccess', id);
          dispatch('alert/success', 'Delete successful', { root: true });
        },
        error => {
          commit('deleteMemberFailure', error);
          dispatch('alert/error', error, { root: true });
        }
      );
  },
};

const mutations = {
  setMembers(state, members) {
    state.members = members
  },
  addMemberSuccess(state, member) {
    let members = state.members;
    members.push(member);
    state.members = members;
    state.apiStatus.addMember.error = false;
    state.apiStatus.addMember.message = null;
  },
  addMemberFailure(state, error) {
    state.members = members;
    state.apiStatus.addMember.error = true;
    state.apiStatus.addMember.message = error;
  },
  deleteMemberSuccess(state, id) {
    const filteredData = state.members.filter(item => !id.includes(item.id));
    state.members = filteredData;
    state.apiStatus.deleteMember.error = false;
    state.apiStatus.deleteMember.message = null;
  },
  deleteMemberFailure(state, error) {
    state.apiStatus.deleteMember.error = true;
    state.apiStatus.deleteMember.message = error;
  }
};

export const members = {
  namespaced: true,
  state,
  actions,
  mutations
};
