import { authHeader } from '../helpers';
export const positionService = {
  getAll,
  getLevels,
  getTypes
};
const apiUrl = 'http://dev.yunwootech.com:52304';
function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };
  return fetch(`${apiUrl}/code-management/positions`, requestOptions).then(handleResponse);
}
function getLevels() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };
  return fetch(`${apiUrl}/code-management/levels`, requestOptions).then(handleResponse);
}
function getTypes() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };
  return fetch(`${apiUrl}/code-management/types`, requestOptions).then(handleResponse);
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
