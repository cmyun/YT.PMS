import { taskService } from '../../services';

const state = {
  status: null,
  tasks: [],
  affiliations: []
}

const actions = {
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
  searchTasks({ dispatch, commit }, condition) {
    taskService.searchTasks(condition)
      .then(
        tasks => {
          console.log(tasks);
          commit('setTasks', tasks);
        },
        error => {
          commit('searchTasksFailure', error);
          dispatch('alert/error', error, { root: true });
        }
      );
  },
  deleteTask({ dispatch, commit }, id) {
    taskService.delete(id)
      .then(
        id => {
          commit('deleteTaskSuccess', id);
        },
        error => {
          commit('deleteTaskFailure', error);
          dispatch('alert/error', error, { root: true });
        }
      );
  },
};

const mutations = {
  setTasks(state, tasks) {
    state.tasks = tasks
  },
  searchTasksFailure(state, error) {
    state.tasks = []
    state.status = 'error';
  },
  setAffiliations(state, affiliations) {
    state.affiliations = affiliations
  },
  deleteTaskFailure(state, error) {
    state.status = 'error';
  },
};

export const tasks = {
  namespaced: true,
  state,
  actions,
  mutations
};
