import { positionService } from '../../services';

const state = {
    status: null,
    levels: []
}

const actions = {
    getLevels({ commit }) {
        positionService.getLevels()
            .then(
              levels => {
                    commit('setLevels', levels);
                }
            );
    }
};

const mutations = {
    setLevels(state, levels) {
        state.levels = levels
    }
};

export const levels = {
    namespaced: true,
    state,
    actions,
    mutations
};
