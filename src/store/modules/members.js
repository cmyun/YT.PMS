import { userService } from '../../services';

const state = {
    status: null,
    members: []
}

const actions = {
    getMembers({ commit }) {
        userService.getAll()
            .then(
                members => {
                    commit('setMembers', members);
                },

            );
    },
    getMembersByOrg({ commit }, orgId) {
        userService.getByOrg(orgId)
            .then(
                members => {
                    commit('setMembers', members);
                },
                error => {
                  commit('getMembersFailure', error);
                }
            );
    },
    addMember({ dispatch, commit }, user) {
      userService.register(user)
          .then(
              user => {
                  commit('addMemberSuccess', user);
              },
          );
    },
    deleteMember({ dispatch, commit }, id) {
      userService.delete(id)
          .then(
              user => {
                  commit('deleteMemberSuccess', id);
              },
              error => {
                commit('deleteMemberFailure', error)
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
    deleteMemberSuccess(state, id) {
      let members = state.members;
      const filteredData = members.filter(item => !id.includes(item.id));
      state.members = filteredData;
    },
    deleteMemberFailure(state, error) {
      state.status = error;
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
