import { userService } from '../../services';

const state = {
    status: null,
    member: []
}

const actions = {
    // getMember({ commit }) {
    //     userService.getAll()
    //         .then(
    //             member => {
    //                 commit('setMember', member);
    //             }
    //         );
    // },
    // const actions = {
    //     login({ dispatch, commit }, { id, password }) {
    //         commit('loginRequest', { id });
        
    //         userService.login(id, password)
    getMemberInfo({ commit }, id) {
        console.log(id)
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
};

export const member = {
    namespaced: true,
    state,
    actions,
    mutations
};
