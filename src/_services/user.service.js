import config from 'config';
import { authHeader } from '../_helpers';

export const userService = {
    login,
    logout,
    getAll,
    atualizar,
    updatePwd
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password,email: username })
    };

    return fetch(`${config.apiUrl}/v1/account/authenticateusers`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
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


function atualizar(user) {

    const requestOptions = {
        method: 'PUT',
        headers: authHeader(),
        body: JSON.stringify(user)
    };
    return fetch(`${config.apiUrl}/v1/CurUsuarios/` +user.idUsuario, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            return JSON.stringify(user);
        });
}


function updatePwd(idUsuario,senha,novasenha,confirmacaosenha) {

    const requestOptions = {
        method: 'PUT',
        headers: authHeader(),
        body: JSON.stringify({senha,novasenha,confirmacaosenha})
    };
    return fetch(`${config.apiUrl}/v1/CurUsuarios/UpdateSenha?id=` +idUsuario, requestOptions)
        .then(handleResponse)
        .then(idUsuario => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            return JSON.stringify({senha,novasenha,confirmacaosenha});
        });
}