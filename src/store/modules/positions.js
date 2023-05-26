import { positionService } from '../../services';

const state = {
  status: null,
  positions: []
}

const actions = {
  getPositions({ commit }) {
    positionService.getAll()
      .then(
        positions => {
          commit('setPositions', positions);
        }
      );
  }
};

const mutations = {
  setPositions(state, positions) {
    state.positions = positions
  }
};

export const positions = {
  namespaced: true,
  state,
  actions,
  mutations
};
