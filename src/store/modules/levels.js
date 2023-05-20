import { positionService } from '../../services';

const state = {
    status: null,
    levels: []
}

const actions = {
    getLevels({ dispatch, commit }) {
        positionService.getLevels()
          .then(
            levels => {
              commit('setLevels', levels);
            },
            error => {
              dispatch('alert/error', error, { root: true });
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
