import config from 'config';
import { authHeader } from '../_helpers';

export const mailcontroleService = {
    FaleConosco,
    SejaParceiro
};


function FaleConosco(cidadeselected, estadoSelected, assunto,nome,email,empresa,telefone,info,qtdefuncionarios,cargo) {

    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify({cidadeselected, estadoSelected, assunto,nome,email,empresa,telefone,info,qtdefuncionarios,cargo })
    };

    return fetch(`${config.apiUrl}/v1/MailControles/FaleConosco` , requestOptions)
        .then(handleResponse)
        .then(nome => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            return JSON.stringify({cidadeselected, estadoSelected, assunto,nome,email,empresa,telefone,info,qtdefuncionarios,cargo});
        });   
}


function SejaParceiro(nome,empresa,estadoSelected,cidadeselected,email,telefone,info) {

    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify({nome,empresa,estadoSelected,cidadeselected,email,telefone,info })
    };

    return fetch(`${config.apiUrl}/v1/MailControles/SejaParceiro` , requestOptions)
        .then(handleResponse)
        .then(nome => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            return JSON.stringify({nome,empresa,estadoSelected,cidadeselected,email,telefone,info});
        });   
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