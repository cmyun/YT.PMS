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
    }
};

const mutations = {
    setOrganizations(state, organizations) {
        state.organizations = organizations
    },
    moveOrgSuccess(state, targetId, ids) {
      console.log(targetId, ids)
    }
};

export const organizations = {
    namespaced: true,
    state,
    actions,
    mutations
};
