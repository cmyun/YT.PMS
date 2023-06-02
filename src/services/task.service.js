import { authHeader } from '../helpers';
export const taskService = {
  searchTasks,
  getAffiliations,
  getHistories,
  getFiles,
  updateTaskStatus,
  delete: _delete
};
const apiUrl = 'http://dev.yunwootech.com:52304';

function getAffiliations(id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };
  return fetch(`${apiUrl}/task-management/tasks/${id}/affiliations`, requestOptions).then(handleResponse);
}
function searchTasks(condition) {
  const requestOptions = {
    method: 'POST',
    headers: { 
      ...authHeader(), 
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(condition)
  };
  return fetch(`${apiUrl}/task-management/tasks/search-conditions`, requestOptions).then(handleResponse);
}
function getHistories(id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };
  return fetch(`${apiUrl}/task-management/tasks/${id}/historys`, requestOptions).then(handleResponse);
}
function getFiles(id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };
  return fetch(`${apiUrl}/task-management/tasks/${id}/files`, requestOptions).then(handleResponse);
}
function updateTaskStatus(task) {
  const requestOptions = {
    method: 'PUT',
    headers: { 
      ...authHeader(), 
      'Content-Type': 'application/json' },
    body: JSON.stringify(task)
  };
  return fetch(`${apiUrl}/task-management/tasks/status`, requestOptions).then(handleResponse);
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
  return fetch(`${apiUrl}/task-management/tasks/${id}`, requestOptions).then(handleResponse);
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
      // console.log(response);
      return Promise.reject(error);
    }
    return data;
  });
}
