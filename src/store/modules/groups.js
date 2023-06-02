import { groupService } from '../../services';

const state = {
  groups: [],
  apiStatus: {
    deleteGroup: {
      error: false,
      message: null
    },
    addGroup: {
      error: false,
      message: null
    }
  }
}

const actions = {
  getAll({ dispatch, commit }) {
    groupService.getAll()
      .then(
        groups => {
          commit('setGroups', groups);
        }
      );
  },
  deleteGroup({ dispatch, commit }, id) {
    groupService.delete(id)
      .then(
        user => {
          commit('deleteGroupSuccess', id);
          dispatch('alert/success', 'Delete successful', { root: true });
        },
        error => {
          commit('deleteGroupFailure', error);
          dispatch('alert/error', error, { root: true });
        }
      );
  },
  addGroup({ dispatch, commit }, group) {
    groupService.addGroup(group)
      .then(
        user => {
          commit('addGroupSuccess', group);
          dispatch('alert/success', 'Add successful', { root: true });
        },
        error => {
          commit('addGroupFailure', error);
          dispatch('alert/error', error, { root: true });
        }
      );
  },
};

const mutations = {
  setGroups(state, groups) {
    state.groups = groups
  },
  addGroupSuccess(state, group) {
    let groups = state.groups;
    groups.push(group.group);
    state.groups = groups;
    state.apiStatus['addGroup'].error = false;
    state.apiStatus['addGroup'].message = null;
  },
  deleteGroupSuccess(state, id) {
    let groups = state.groups;
    const filteredData = groups.filter(item => !id.includes(item.id));
    state.groups = filteredData;
    state.apiStatus['deleteGroup'].error = false;
    state.apiStatus['deleteGroup'].message = null;
  },
  deleteGroupFailure(state, error) {
    state.apiStatus['deleteGroup'].error = true;
    state.apiStatus['deleteGroup'].message = error;
  },
  addGroupFailure(state, error) {
    state.apiStatus['addGroup'].error = true;
    state.apiStatus['addGroup'].message = error;
  },
};

export const groups = {
  namespaced: true,
  state,
  actions,
  mutations
};
