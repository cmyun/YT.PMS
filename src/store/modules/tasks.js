import { taskService } from '../../services';

const state = {
  status: null,
  tasks: [],
  affiliations: []
}

const actions = {
  getTasks({ commit }) {
    taskService.getTasks()
      .then(
        tasks => {
          commit('setTasks', tasks);
        }
      );
  },
  getAffiliations({ dispatch, commit }, id) {
    taskService.getAffiliations(id)
      .then(
        affiliations => {
          commit('setAffiliations', affiliations);
        },
        error => {
          dispatch('alert/error', error, { root: true });
        }
      );
  },
};

const mutations = {
  setTasks(state, tasks) {
    state.tasks = tasks
  },
  setAffiliations(state, affiliations) {
    state.affiliations = affiliations
  }

};

export const tasks = {
  namespaced: true,
  state,
  actions,
  mutations
};
