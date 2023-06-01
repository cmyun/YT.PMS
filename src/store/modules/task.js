import { taskService } from '../../services';

const state = {
  status: null,
  task: [],
  histories: [],
  files: []
}

const actions = {
  getHistories({ dispatch, commit }, id) {
    taskService.getHistories(id)
      .then(
        histories => {
          commit('setHistories', histories);
        },
        error => {
          dispatch('alert/error', error, { root: true });
        }
      );
  },
  getFiles({ dispatch, commit }, id) {
    taskService.getFiles(id)
      .then(
        files => {
          commit('setFiles', files);
        },
        error => {
          dispatch('alert/error', error, { root: true });
        }
      );
  },
  updateTaskStatus({ dispatch, commit }, task) {
    taskService.updateTaskStatus(task)
      .then(
        res => {
          commit('updateTaskStatusSuccess', res);
        },
        error => {
          commit('updateTaskStatusFailure', error);
          dispatch('alert/error', error, { root: true });
        }
      );
  },
};

const mutations = {
  setHistories(state, histories) {
    state.histories = histories
  },
  setFiles(state, files) {
    state.files = files
  },
  updateTaskStatusSuccess(state, task){
    state.task = task;
  },
  updateTaskStatusFailure(state, error){
    state.status = 'error';
  }
};

export const task = {
  namespaced: true,
  state,
  actions,
  mutations
};
