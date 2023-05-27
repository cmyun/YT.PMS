import { userService } from '../../services';

const state = {
  status: null,
  members: []
}

const actions = {
  getMembers({ dispatch, commit }) {
    userService.getAll()
      .then(
        members => {
          commit('setMembers', members);
        },
        error => {
          dispatch('alert/error', error, { root: true });
        }
      );
  },
  getMembersByOrg({ dispatch, commit }, orgId) {
    userService.getByOrg(orgId)
      .then(
        members => {
          commit('setMembers', members);
        },
        error => {
          commit('getMembersFailure', error);
          dispatch('alert/error', error, { root: true });
        }
      );
  },
  addMember({ dispatch, commit }, user) {
    userService.addMember(user)
      .then(
        user => {
          commit('addMemberSuccess', user);
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
  },
  addMemberFailure(state, error) {
    state.status = 'error';
  },
  deleteMemberSuccess(state, id) {
    let members = state.members;
    const filteredData = members.filter(item => !id.includes(item.id));
    state.members = filteredData;
  },
  deleteMemberFailure(state, error) {
    state.status = 'error';
  },
  getMembersFailure(state) {
    state.members = [];
  },
};

export const members = {
  namespaced: true,
  state,
  actions,
  mutations
};
