import { organizationService } from '../../services';

const state = {
  organizations: [],
  apiStatus: {
    moveOrg: {
      error: false,
      message: null
    },
    deleteOrg: {
      error: false,
      message: null
    },
    addOrg: {
      error: false,
      message: null
    }
  }
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
  moveOrg({ dispatch, commit }, {tid, ids}) {
    organizationService.moveOrg(tid, ids)
      .then(
        res => {
          commit('moveOrgSuccess', res);
          dispatch('alert/success', 'Move successful', { root: true });
        },
        error => {
          commit('moveOrgFailure', error);
          dispatch('alert/error', error, { root: true });
        }
      );
  },
  
  deleteOrg({ dispatch, commit }, id) {
    organizationService.delete(id)
      .then(
        id => {
          commit('deleteOrgSuccess', id);
          dispatch('alert/success', 'Delete successful', { root: true });
        },
        error => {
          commit('deleteOrgFailure', error);
          dispatch('alert/error', error, { root: true });
        }
      );
  },
  addOrg({ dispatch, commit }, org) {
    organizationService.addOrganization(org)
      .then(
        user => {
          commit('addOrgSuccess', org);
          dispatch('alert/success', 'Add successful', { root: true });
        },
        error => {
          commit('addOrgFailure', error);
          dispatch('alert/error', error, { root: true });
        }
      );
  },
};

const mutations = {
  setOrganizations(state, organizations) {
    state.organizations = organizations
  },
  moveOrgSuccess(state, res) {
    state.apiStatus.moveOrg.error = false;
    state.apiStatus.moveOrg.message = null;
  },
  moveOrgFailure(state, error) {
    state.apiStatus.moveOrg.error = true;
    state.apiStatus.moveOrg.message = error;
  },
  addOrgSuccess(state, org) {
    state.apiStatus.addOrg.error = false;
    state.apiStatus.addOrg.message = null;
  },
  addOrgFailure(state, error) {
    state.apiStatus.addOrg.error = true;
    state.apiStatus.addOrg.message = error;
  },
  deleteOrgSuccess(state, id) {
    let organizations = state.organizations;
    const filteredData = organizations.filter(item => !id.includes(item.id));
    state.organizations = filteredData;
    state.apiStatus.deleteOrg.error = false;
    state.apiStatus.deleteOrg.message = null;
  },
  deleteOrgFailure(state, error) {
    state.apiStatus.deleteOrg.error = true;
    state.apiStatus.deleteOrg.message = error;
  },
};

export const organizations = {
  namespaced: true,
  state,
  actions,
  mutations
};
