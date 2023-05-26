import { positionService } from '../../services';

const state = {
  status: null,
  types: []
}
const actions = {
  getTypes({ commit }) {
    positionService.getTypes()
      .then(
        types => {
          commit('setTypes', types);
        }
      );
  }
};
const mutations = {
  setTypes(state, types) {
    state.types = types
  }
};
export const types = {
  namespaced: true,
  state,
  actions,
  mutations
};
