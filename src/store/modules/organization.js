import { organizationService } from '../../services';

const state = {
    status: null,
    organization: [],
    orgMembers: []
}

const actions = {
    getOrganizationInfo({ commit }, id) {
      organizationService.getById(id)
            .then(
                organization => {
                    commit('setOrganization', organization);
                }
            );
    },
    getOrgMembers({ commit }, id) {
      organizationService.getOrgMembers(id)
          .then(
              org => {
                  commit('setOrgMembers', org);
              }
          );
    },
    updateOrganization({ dispatch, commit }, organization) {
      organizationService.updateOrganization(organization)
          .then(
              organization => {
                  commit('updateOrganizationSuccess', organization);
              }
          );
    }
};

const mutations = {
    setOrganization(state, organization) {
        state.organization = organization
    },
    updateOrganizationSuccess(state, organization) {
      state.organization = organization
    },
    setOrgMembers(state, orgMembers) {
      state.orgMembers = orgMembers
    },
};

export const organization = {
    namespaced: true,
    state,
    actions,
    mutations
};
