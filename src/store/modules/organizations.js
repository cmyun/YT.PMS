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
    }
};

const mutations = {
    setOrganizations(state, organizations) {
        state.organizations = organizations
    }
};

export const organizations = {
    namespaced: true,
    state,
    actions,
    mutations
};
