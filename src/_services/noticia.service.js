import config from 'config';
import { authHeader } from '../_helpers';

export const noticiaService = {
    getAll,
    get,
    Delete,
    Create
};


function Create(notId,notTitulo,notResenha,notConteudo,notFonte,notImagem,notComentario,notVigenciaInicio,notVigenciaFim,notStatus,notIdCategoria,formData) {

    const requestOptions = {
        method: notId ==0 ? 'POST' : 'PUT',
        headers: authHeader(),
        body: JSON.stringify({ notId,notTitulo,notResenha,notConteudo,notFonte,notImagem,notComentario,notVigenciaInicio,notVigenciaFim,notStatus,notIdCategoria })
    };

    // if(files){
     
    // }

    // /v1/Noticias/upload
    return fetch(`${config.apiUrl}/v1/Noticias` + (notId !== 0  ? '/'+notId : ''), requestOptions)
        .then(handleResponse)
        .then(nome => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            return JSON.stringify({ notId,notTitulo,notResenha,notConteudo,notFonte,notImagem,notComentario,notVigenciaInicio,notVigenciaFim,notStatus,notIdCategoria });
        });
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/v1/Noticias`, requestOptions).then(handleResponse);
}


function get(notId) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/v1/Noticias/${notId}`, requestOptions).then(handleResponse);
}




function Delete(notId) {
    console.log(notId);
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
        };
    return fetch(`${config.apiUrl}/v1/Noticias` + '/'+notId, requestOptions)
        .then(handleResponse)
        .then(nome => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes

            return JSON.stringify({ notId });
        });
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