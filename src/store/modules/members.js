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
              // error => {
              //     commit('registerFailure', error);
              // }
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
