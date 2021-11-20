import config from 'config';
import { authHeader } from '../_helpers';

export const grupoService = {
    getAll,
    Create,
    Delete,
    getBYId,
    FormNotificacaoDisp,
    getCalendario,
    Inscrever
};


function Create(idTreinamento,nome,categoria,descricao,conteudo,sinopse,preco,cargaHoraria,modulos, status,tipo) {

    const requestOptions = {
        method: idTreinamento ==0 ? 'POST' : 'PUT',
        headers: authHeader(),
        body: JSON.stringify({ idTreinamento,nome,categoria,descricao,conteudo,sinopse,preco,cargaHoraria,modulos, status,tipo })
    };
    return fetch(`${config.apiUrl}/v1/CurTreinamentoes` + (idTreinamento !== 0  ? '/'+idTreinamento : ''), requestOptions)
        .then(handleResponse)
        .then(nome => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            return JSON.stringify({ idTreinamento,nome,categoria,descricao,conteudo,sinopse,preco,cargaHoraria,modulos, status,tipo });
        });
}





function FormNotificacaoDisp(idTreinamento,nome,estado,cidade,empresa,codigo) {

    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify({ idTreinamento,nome,estado,cidade,empresa,codigo })
    };
    return fetch(`${config.apiUrl}/v1/CurTreinamentoes/formNotificacaoDisp/` +idTreinamento, requestOptions)
        .then(handleResponse)
        .then(nome => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            return JSON.stringify({ idTreinamento,nome,estado,cidade,empresa,codigo });
        });
}


function Inscrever(idTreinamento,nome,estado,cidade,codigo,email,cpf,telefone,cargo,aceitepagamento,modulos) {

    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify({ idTreinamento,nome,estado,cidade,codigo,email,cpf,telefone,cargo,aceitepagamento,modulos })
    };
    return fetch(`${config.apiUrl}/v1/CurTreinamentoes/Inscrever/` +idTreinamento, requestOptions)
        .then(handleResponse)
        .then(nome => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            return JSON.stringify({ idTreinamento,nome,estado,cidade,codigo,email,cpf,telefone,cargo,aceitepagamento,modulos });
        });
}


function Delete(idTreinamento) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
        };
    return fetch(`${config.apiUrl}/v1/CurTreinamentoes` + '/'+idTreinamento, requestOptions)
        .then(handleResponse)
        .then(nome => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes

            return JSON.stringify({ idTreinamento });
        });
}


function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/v1/CurTreinamentoes/notAdm`, requestOptions).then(handleResponse);
}


function getBYId(idTreinamento) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/v1/CurTreinamentoes/notAdm/${idTreinamento}`, requestOptions).then(handleResponse);
}


function getCalendario() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/v1/CurTreinamentoes/getCalendario`, requestOptions).then(handleResponse);
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