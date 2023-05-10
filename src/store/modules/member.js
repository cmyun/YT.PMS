import { userService } from '../../services';

const state = {
    status: null,
    member: []
}

const actions = {
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
