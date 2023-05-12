import { groupService } from '../../services';

const state = {
    status: null,
    group: [],
    groupMasters: [],
    groupMembers: [],
    groupWhole: []
}

const actions = {
    getGroupInfo({ commit }, id) {
        groupService.getById(id)
            .then(
                group => {
                    commit('setGroup', group);
                }
            );
    },
    getGroupMasters({ commit }, id) {
      groupService.getGroupMasters(id)
          .then(
              group => {
                  commit('setGroupMasters', group);
              }
          );
    },
    getGroupMembers({ commit }, id) {
      groupService.getGroupMembers(id)
          .then(
              group => {
                  commit('setGroupMembers', group);
              }
          );
    },
    getGroupWhole({ commit }, id) {
      groupService.getGroupWhole(id)
          .then(
              group => {
                  commit('setGroupWhole', group);
              }
          );
    },
    updateGroupMasters({ dispatch, commit }, {groupId, ids}) {
      groupService.updateGroupMasters(groupId, ids)
          .then(
              ids => {
                  commit('updateGroupMastersSuccess', ids);
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
    updateGroupMastersSuccess(state, ids) {
        // state.group.userName = ids
    },
};

export const group = {
    namespaced: true,
    state,
    actions,
    mutations
};
