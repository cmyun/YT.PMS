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
  moveOrg({ dispatch, commit }, {tid, ids}) {
    organizationService.moveOrg(tid, ids)
      .then(
        (tid, ids) => {
          commit('moveOrgSuccess', tid, ids);
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
        user => {
          commit('deleteOrgSuccess', id);
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
  moveOrgSuccess(state, targetId, ids) {
  },
  moveOrgFailure(state, error) {
    state.status = {}
  },
  addOrgSuccess(state, org) {
    let organizations = state.organizations;
    organizations.push(org.org);
    state.organizations = organizations;
  },
  addOrgFailure(state, error) {
    state.status = {}
  },
  deleteOrgSuccess(state, id) {
    let organizations = state.organizations;
    const filteredData = organizations.filter(item => !id.includes(item.id));
    state.organizations = filteredData;
  },
  deleteOrgFailure(state, error) {
    state.status = {};
  },
};

export const organizations = {
  namespaced: true,
  state,
  actions,
  mutations
};
