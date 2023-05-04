// import config from 'config';
// import { authHeader } from '../helpers';

export const userService = {
    login,
    logout,
    register,
    getAll
};

const apiUrl = 'http://dev.yunwootech.com:52304';

function login(id, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, password })
    };

    return fetch(`${apiUrl}/user-management/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // if (user.token) {
                localStorage.setItem('user', JSON.stringify(user));
            // }
            return user;
        });
}

function logout() {
    localStorage.removeItem('user');
}

function register(user) {
    console.log(JSON.stringify(user))
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${apiUrl}/user-management/users`, requestOptions).then(handleResponse);
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        // headers: authHeader()
    };

    return fetch(`${apiUrl}/user-management/users`, requestOptions).then(handleResponse);
}
function getById(id) {
    const requestOptions = {
        method: 'GET',
        // headers: authHeader()
    };

    return fetch(`${apiUrl}/user-management/users/${id}`, requestOptions).then(handleResponse);
}
function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { 
            // ...authHeader(), 
            'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${apiUrl}/user-management/users/${user.id}`, requestOptions).then(handleResponse);
}
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        // headers: authHeader()
    };

    return fetch(`${apiUrl}/user-management/users/${id}`, requestOptions).then(handleResponse);
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