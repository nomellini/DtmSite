import config from 'config';
import { authHeader } from '../_helpers';

export const cidadeService = {
    getAll,
    GetCidadesByUF
};



function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/v1/Cidades`, requestOptions).then(handleResponse);
}

function GetCidadesByUF(uf) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/v1/Cidades/GetByUF?Uf=${uf}`, requestOptions).then(handleResponse);
}




function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        console.log(response)
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }
            console.log(response.status )

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}