import { organizationService } from '../../services';

const state = {
  status: null,
  organization: [],
  orgMembers: [], 
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
  getOrgMembers({ dispatch, commit }, id) {
    organizationService.getOrgMembers(id)
      .then(
        org => {
          commit('setOrgMembers', org);
        },
        // error => {
        //   commit('getOrgMembersFailure', error);
        // }
      );
  },
  updateOrganization({ dispatch, commit }, organization) {
    organizationService.updateOrganization(organization)
      .then(
        organization => {
          commit('updateOrganizationSuccess', organization);
        },
        error => {
          commit('updateOrganizationFailure', error);
          dispatch('alert/error', error, { root: true });
        }
      );
  },
  updateHeadOrganization({ dispatch, commit }, {organization, uid}) {
    organizationService.updateHeadOrganization(organization, uid)
      .then(
        organization => {
          commit('updateOrganizationSuccess', organization);
        },
        error => {
          commit('updateHeadOrganizationFailure', error);
          dispatch('alert/error', error, { root: true });
        }
      );
  }
};

const mutations = {
    setOrganization(state, organization) {
      state.organization = organization
    },
    setOrgMembers(state, orgMembers) {
      state.orgMembers = orgMembers
    },
    setOrgHead(state, orgHead) {
      state.orgHead = orgHead
    },
    // getOrgMembersFailure(state){
    //   state.orgMembers = [];
    // },
    updateOrganizationFailure(state, error) {
      state.status = {}
    },
    updateHeadOrganizationFailure(state, error) {
      state.status = {}
    },
};

export const organization = {
  namespaced: true,
  state,
  actions,
  mutations
};
