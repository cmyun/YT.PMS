import { groupService } from '../../services';

const state = {
  group: [],
  groupMasters: [],
  groupMembers: [],
  groupWhole: [],
  apiStatus: {
    updateGroupMasters: {
      error: false,
      message: null
    },
    updateGroup: {
      error: false,
      message: null
    }
  }
}

const actions = {
  getGroupInfo({ dispatch, commit }, id) {
    groupService.getById(id)
      .then(
        group => {
          commit('setGroup', group);
        }
      );
  },
  getGroupMasters({ dispatch, commit }, id) {
    groupService.getGroupMasters(id)
      .then(
        group => {
          commit('setGroupMasters', group);
        }
      );
  },
  getGroupMembers({ dispatch, commit }, id) {
    groupService.getGroupMembers(id)
      .then(
        group => {
          commit('setGroupMembers', group);
        }
      );
  },
  getGroupWhole({ dispatch, commit }, id) {
    groupService.getGroupWhole(id)
      .then(
        group => {
          commit('setGroupWhole', group);
        }
      );
  },
  updateGroupMasters({ dispatch, commit }, {group, ids}) {
    groupService.updateGroupMasters(group, ids)
      .then(
        group => {
          commit('updateGroupMastersSuccess', group);
          dispatch('alert/success', 'Update successful', { root: true });
        },
        error => {
          console.log(error);
          commit('updateGroupMastersFailure', error);
          dispatch('alert/error', error, { root: true });
        }
      );
  },
  updateGroup({ dispatch, commit }, group) {
    groupService.updateGroup(group)
      .then(
        group => {
          commit('updateGroupSuccess', group);
          dispatch('alert/success', 'Update successful', { root: true });
        },
        error => {
          commit('updateGroupFailure', error);
          setTimeout(() => {
            dispatch('alert/error', error, { root: true });  
          });
          
        }
      );
  }
};

const mutations = {
  setGroup(state, group) {
    state.group = group
  },
  setGroupMasters(state, groupMasters) {
    state.groupMasters = groupMasters
  },
  setGroupMembers(state, groupMembers) {
    state.groupMembers = groupMembers
  },
  setGroupWhole(state, groupWhole) {
    state.groupWhole = groupWhole
  },
  updateGroupMastersSuccess(state, group) {
    state.groupMasters = group;
    state.apiStatus['updateGroupMasters'].error = false;
    state.apiStatus['updateGroupMasters'].message = null;
  },
  updateGroupSuccess(state, group) {
    state.group = group;
    state.apiStatus['updateGroup'].error = false;
    state.apiStatus['updateGroup'].message = null;
  },
  updateGroupFailure(state, error) {
    state.apiStatus['updateGroup'].error = true;
    state.apiStatus['updateGroup'].message = error;
  },
  updateGroupMastersFailure(state, error) {
    state.apiStatus['updateGroupMasters'].error = true;
    state.apiStatus['updateGroupMasters'].message = error;
  },
};

export const group = {
  namespaced: true,
  state,
  actions,
  mutations
};
