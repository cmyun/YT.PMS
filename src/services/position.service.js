export const positionService = {
    getAll
};

const apiUrl = 'http://dev.yunwootech.com:52304';
function getAll() {
    const requestOptions = {
        method: 'GET'
    };

    return fetch(`${apiUrl}/code-management/positions`, requestOptions).then(handleResponse);
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