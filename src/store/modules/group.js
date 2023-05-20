import { groupService } from '../../services';

const state = {
    status: null,
    group: [],
    groupMasters: [],
    groupMembers: [],
    groupWhole: []
}

const actions = {
    getGroupInfo({ dispatch, commit }, id) {
        groupService.getById(id)
            .then(
                group => {
                    commit('setGroup', group);
                },
                error => {
                  dispatch('alert/error', error, { root: true });
                }
            );
    },
    getGroupMasters({ dispatch, commit }, id) {
      groupService.getGroupMasters(id)
          .then(
              group => {
                  commit('setGroupMasters', group);
              },
              error => {
                dispatch('alert/error', error, { root: true });
              }
          );
    },
    getGroupMembers({ dispatch, commit }, id) {
      groupService.getGroupMembers(id)
          .then(
              group => {
                  commit('setGroupMembers', group);
              },
              error => {
                dispatch('alert/error', error, { root: true });
              }
          );
    },
    getGroupWhole({ dispatch, commit }, id) {
      groupService.getGroupWhole(id)
          .then(
              group => {
                  commit('setGroupWhole', group);
              },
              error => {
                dispatch('alert/error', error, { root: true });
              }
          );
    },
    updateGroupMasters({ dispatch, commit }, {group, ids}) {
      
      groupService.updateGroupMasters(group, ids)
          .then(
              group => {
                  commit('updateGroupMastersSuccess', group);
              },
              error => {
                dispatch('alert/error', error, { root: true });
              }
          );
    },
    updateGroup({ dispatch, commit }, group) {
      groupService.updateGroup(group)
          .then(
              group => {
                  commit('updateGroupSuccess', group);
              },
              error => {
                dispatch('alert/error', error, { root: true });
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
        state.groupMasters = group
    },
    updateGroupMembersSuccess(state, group) {
      state.groupMembers = group
    },
    updateGroupSuccess(state, group) {
      state.group = group
    },
};

export const group = {
    namespaced: true,
    state,
    actions,
    mutations
};
