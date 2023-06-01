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
};

const mutations = {
  setHistories(state, histories) {
    state.histories = histories
  },
  setFiles(state, files) {
    state.files = files
  }
};

export const task = {
  namespaced: true,
  state,
  actions,
  mutations
};
