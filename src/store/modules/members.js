import { userService } from '../../services';
import router from '../../router';

const state = {
    status: null,
    members: []
}

const actions = {
    getMembers({ dispatch, commit }, { id, password }) {
        userService.getAll()
            .then(
                members => {
                    commit('setMembers', members);
                }
            );
    },
    addMember(context, member) {
        // context.commit('addMember', member);
    }
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
