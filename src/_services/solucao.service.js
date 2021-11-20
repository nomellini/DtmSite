import config from 'config';
import { authHeader } from '../_helpers';

export const solucaoService = {
    getAll,
    Delete,
    Create,
    GetTbSolucaoBYSlug,
    getAllParent
};


function Create(Id,Titulo,Menu,Conteudo,Slug) {

    const requestOptions = {
        method: Id ==0 ? 'POST' : 'PUT',
        headers: authHeader(),
        body: JSON.stringify({ Id,Titulo,Menu,Conteudo,Slug })
    };

 
    // /v1/Solucaos/upload
    return fetch(`${config.apiUrl}/v1/Solucaos` + (Id !== 0  ? '/'+Id : ''), requestOptions)
        .then(handleResponse)
        .then(nome => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            return JSON.stringify({ Id,Titulo,Menu,Conteudo,Slug });
        });
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/v1/Solucaos/`, requestOptions).then(handleResponse);
}

function getAllParent() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/v1/Solucaos/GetTbSolucaoParent`, requestOptions).then(handleResponse);
}

function GetTbSolucaoBYSlug(slug) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/v1/Solucaos/GetTbSolucaoBYSlug?Slug=${slug}`, requestOptions).then(handleResponse);
}





function Delete(Id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
        };
    return fetch(`${config.apiUrl}/v1/Solucaos` + '/'+Id, requestOptions)
        .then(handleResponse)
        .then(nome => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes

            return JSON.stringify({ Id });
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}