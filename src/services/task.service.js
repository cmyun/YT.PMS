import { authHeader } from '../helpers';
export const taskService = {
  getTasks,
  getAffiliations
};
const apiUrl = 'http://dev.yunwootech.com:52304';
function getTasks() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };
  return fetch(`${apiUrl}/task-management/tasks`, requestOptions).then(handleResponse);
}
function getAffiliations(id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };
  return fetch(`${apiUrl}/task-management/tasks/${id}/affiliations`, requestOptions).then(handleResponse);
}
// /task-management/tasks/{id}/affiliations
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
