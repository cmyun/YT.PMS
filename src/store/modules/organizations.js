import { organizationService } from '../../services';

const state = {
    status: null,
    organizations: []
}

const actions = {
    getOrganizations({ commit }) {
      organizationService.getAll()
        .then(
          organizations => {
            commit('setOrganizations', organizations);
          }
        );
    },
    moveOrg({ dispatch, commit }, {targetId, ids}) {
      console.log(targetId, ids)
      organizationService.moveOrg(targetId, ids)
          .then(
            (targetId, ids) => {
                  commit('moveOrgSuccess', targetId, ids);
              }
          );
    },
    deleteOrg({ dispatch, commit }, id) {
      organizationService.delete(id)
          .then(
              user => {
                  commit('deleteOrgSuccess', id);
              },
              error => {
                commit('deleteOrgFailure', error)
              }
          );
    },
    addOrg({ dispatch, commit }, org) {
      organizationService.addOrganization(org)
          .then(
              user => {
                  commit('addOrgSuccess', org);
              },
          );
    },
};

const mutations = {
    setOrganizations(state, organizations) {
        state.organizations = organizations
    },
    moveOrgSuccess(state, targetId, ids) {
      console.log(targetId, ids)
    },
    addOrgSuccess(state, org) {
      let organizations = state.organizations;
      organizations.push(org.org);
      state.organizations = organizations;
    },
    deleteOrgSuccess(state, id) {
      let organizations = state.organizations;
      const filteredData = organizations.filter(item => !id.includes(item.id));
      state.organizations = filteredData;
    },
    deleteOrgFailure(state, error) {
      state.status = error;
    },
};

export const organizations = {
    namespaced: true,
    state,
    actions,
    mutations
};
