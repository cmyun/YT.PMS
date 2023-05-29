import { groupService } from '../../services';

const state = {
  status: null,
  groups: []
}

const actions = {
  getAll({ dispatch, commit }) {
    groupService.getAll()
      .then(
        groups => {
          commit('setGroups', groups);
        },
        error => {
          dispatch('alert/error', error, { root: true });
        }
      );
  },
  deleteGroup({ dispatch, commit }, id) {
    groupService.delete(id)
      .then(
        user => {
          commit('deleteGroupSuccess', id);
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
  },
  deleteGroupSuccess(state, id) {
    let groups = state.groups;
    const filteredData = groups.filter(item => !id.includes(item.id));
    state.groups = filteredData;
  },
  deleteGroupFailure(state, error) {
    state.status = 'error';
  },
  addGroupFailure(state, group) {
    state.status = 'error';
  },
};

export const groups = {
  namespaced: true,
  state,
  actions,
  mutations
};
