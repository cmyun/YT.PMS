import { authHeader } from '../helpers';
export const organizationService = {
    getAll,
    getById,
    updateOrganization,
    addOrganization,
    delete: _delete
};

const apiUrl = 'http://dev.yunwootech.com:52304';


function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${apiUrl}/organization-management/organizations`, requestOptions).then(handleResponse);
}
function getById(id) {
  const requestOptions = {
      method: 'GET',
      headers: authHeader()
  };
  return fetch(`${apiUrl}/organization-management/organizations/${id}`, requestOptions).then(handleResponse);
}
function updateOrganization(organization) {
  const requestOptions = {
      method: 'PUT',
      headers: { 
          ...authHeader(), 
          'Content-Type': 'application/json' },
      body: JSON.stringify(organization)
  };
  return fetch(`${apiUrl}/organization-management/organizations/${organization.organization.id}`, requestOptions).then(handleResponse);
}
function addOrganization(organization) {
  const requestOptions = {
      method: 'POST',
      headers: { 
        ...authHeader(), 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(organization)
  };
  return fetch(`${apiUrl}/organization-management/organizations`, requestOptions).then(handleResponse);
}
function _delete(id) {
  const requestOptions = {
      method: 'DELETE',
      headers: {
        ...authHeader(),
        'Content-Type': 'application/json'
      },  
      body: JSON.stringify(id)
  };

  return fetch(`${apiUrl}/organization-management/organizations`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // logout();
                // location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
