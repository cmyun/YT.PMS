import { organizationService } from '../../services';

const state = {
  organization: [],
  orgMembers: [],
  apiStatus: {
    updateOrganization: {
      error: false,
      message: null
    },
    updateHeadOrganization: {
      error: false,
      message: null
    }
  }
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
        }
      );
  },
  updateOrganization({ dispatch, commit }, organization) {
    organizationService.updateOrganization(organization)
      .then(
        organization => {
          commit('updateOrganizationSuccess', organization);
          dispatch('alert/success', 'Update successful', { root: true });
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
          commit('updateHeadOrganizationSuccess', organization);
          dispatch('alert/success', 'Update successful', { root: true });
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
    updateOrganizationSuccess(state, organization) {
      state.organization = organization
      state.apiStatus.updateOrganization.error = false;
      state.apiStatus.updateOrganization.message = null;
    },
    updateOrganizationFailure(state, error) {
      state.apiStatus.updateOrganization.error = true;
      state.apiStatus.updateOrganization.message = error;
    },
    updateHeadOrganizationSuccess(state, organization) {
      state.apiStatus.updateHeadOrganization.error = false;
      state.apiStatus.updateHeadOrganization.message = null;
    },
    updateHeadOrganizationFailure(state, error) {
      state.apiStatus.updateHeadOrganization.error = true;
      state.apiStatus.updateHeadOrganization.message = error;
    },
};

export const organization = {
  namespaced: true,
  state,
  actions,
  mutations
};
