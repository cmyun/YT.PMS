import { authHeader } from '../helpers';

export const groupService = {
  getAll,
  getById,
  getGroupMasters,
  getGroupMembers,
  getGroupWhole,
  updateGroupMasters,
  updateGroup,
  addGroup,
  delete: _delete
};

const apiUrl = 'http://dev.yunwootech.com:52304';

function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };
  return fetch(`${apiUrl}/group-management/groups`, requestOptions).then(handleResponse);
}

function getById(id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };
  return fetch(`${apiUrl}/group-management/groups/${id}`, requestOptions).then(handleResponse);
}
function getGroupMasters(id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };
  return fetch(`${apiUrl}/group-management/groups/${id}/masters`, requestOptions).then(handleResponse);
}
function getGroupMembers(id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };
  return fetch(`${apiUrl}/group-management/groups/${id}/members`, requestOptions).then(handleResponse);
}
function getGroupWhole(id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };
  return fetch(`${apiUrl}/group-management/groups/${id}/whole`, requestOptions).then(handleResponse);
}
function updateGroupMasters(group, ids) {
  const requestOptions = {
    method: 'PUT',
    headers: { 
      ...authHeader(), 
      'Content-Type': 'application/json' },
    body: JSON.stringify(ids)
  };

  return fetch(`${apiUrl}/group-management/groups/${group.id}/masters`, requestOptions).then(handleResponse);
}
function updateGroup(group) {
  const requestOptions = {
    method: 'PUT',
    headers: { 
      ...authHeader(), 
      'Content-Type': 'application/json' },
    body: JSON.stringify(group)
  };
  return fetch(`${apiUrl}/group-management/groups/${group.group.id}`, requestOptions).then(handleResponse);
}
function addGroup(group) {
  const requestOptions = {
    method: 'POST',
    headers: { 
      ...authHeader(), 
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(group)
  };

  return fetch(`${apiUrl}/group-management/groups`, requestOptions).then(handleResponse);
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

  return fetch(`${apiUrl}/group-management/groups`, requestOptions).then(handleResponse);
}
function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // logout();
        // location.reload(true);
      }
      // const error = (data && data.message) || response.statusText;
      const error = data || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}
