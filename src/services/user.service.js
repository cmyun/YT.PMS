import { authHeader } from '../helpers';

export const userService = {
  login,
  logout,
  register,
  addMember,
  getAll,
  getById,
  getInfoById,
  getUsers,
  addUsers,
  getByOrg,
  update,
  delete: _delete
};

const apiUrl = 'http://dev.yunwootech.com:52304';

function login(id, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, password })
  };
  return fetch(`${apiUrl}/account-management/login`, requestOptions)
    .then(handleResponse)
    .then(user => {
      if (user.token) {
        localStorage.setItem('user', JSON.stringify(user));
      }
      return user;
    });
}
function logout() {
  localStorage.removeItem('user');
}

function register(user) {
  const requestOptions = {
    method: 'POST',
    headers: { 
      ...authHeader(), 
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(user)
  };
  return fetch(`${apiUrl}/account-management/signup`, requestOptions).then(handleResponse);
}
function addMember(user) {
  const requestOptions = {
    method: 'POST',
    headers: { 
      ...authHeader(), 
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(user)
  };
  return fetch(`${apiUrl}/user-management/users`, requestOptions).then(handleResponse);
}
function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };
  return fetch(`${apiUrl}/user-management/users`, requestOptions).then(handleResponse);
}
function getById(id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };
  return fetch(`${apiUrl}/user-management/users/${id}`, requestOptions).then(handleResponse);
}
function getInfoById(id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };
  return fetch(`${apiUrl}/user-management/users/${id}/details`, requestOptions).then(handleResponse);
}
function getUsers(id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };
  return fetch(`${apiUrl}/user-management/users/signup`, requestOptions).then(handleResponse);
}
function addUsers(data){
  const requestOptions = {
    method: 'POST',
    headers: { 
      ...authHeader(), 
      'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  };
  return fetch(`${apiUrl}/user-management/users/approval`, requestOptions).then(handleResponse);
}
function getByOrg(orgId) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };
  return fetch(`${apiUrl}/user-management/organizations/${orgId}/users`, requestOptions).then(handleResponse);
}
function update(user) {
  const requestOptions = {
    method: 'PUT',
    headers: { 
      ...authHeader(), 
      'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  };
  return fetch(`${apiUrl}/user-management/users/${user.id}`, requestOptions).then(handleResponse);
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
  return fetch(`${apiUrl}/user-management/users`, requestOptions).then(handleResponse);
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
      const error = data;
      console.log(response);
      console.log(data);
      return Promise.reject(error);
    }
    return data;
  });
}
