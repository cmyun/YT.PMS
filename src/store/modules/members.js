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
                }
            );
    },
    // const actions = {
    //     login({ dispatch, commit }, { id, password }) {
    //         commit('loginRequest', { id });
        
    //         userService.login(id, password)
    getMembersByOrg({ commit }, orgId) {
        console.log(orgId)
        userService.getByOrg(orgId)
            .then(
                members => {
                    commit('setMembers', members);
                }
            );
    },
};

const mutations = {
    setMembers(state, members) {
        state.members = members
    },
    addMember(state, member) {
        let members = state.members;
        members.push(member);
        state.members = members;
    },
};

export const members = {
    namespaced: true,
    state,
    actions,
    mutations
};
