import { mailcontroleConstants } from '../_constants';
import { mailcontroleService } from '../_services';
import { alertActions } from '.';
import { history } from '../_helpers';

export const mailcontroleActions = {
    FaleConosco,
    SejaParceiro
};



function FaleConosco(cidadeselected, estadoSelected, assunto,nome,email,empresa,telefone,info,qtdefuncionarios,cargo) {
    return dispatch => {
        dispatch(request({ nome }));

        mailcontroleService.FaleConosco(cidadeselected, estadoSelected, assunto,nome,email,empresa,telefone,info,qtdefuncionarios,cargo)
            .then(
                nome => { 
                    dispatch(success(nome));
                    dispatch(alertActions.success('Contato enviado' ));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error("Erro ao enviar email."));
                }
            )
    };

    function request(idControle) { return { type: mailcontroleConstants.CREATE_REQUEST, idControle } }
    function success(idControle) { return { type: mailcontroleConstants.CREATE_SUCCESS, idControle } }
    function failure(error) { return { type: mailcontroleConstants.CREATE_FAILURE, error } }
}


function SejaParceiro(nome,empresa,estadoSelected,cidadeselected,email,telefone,info) {
    return dispatch => {
        dispatch(request({ nome }));

        mailcontroleService.SejaParceiro(nome,empresa,estadoSelected,cidadeselected,email,telefone,info)
            .then(
                nome => { 
                    dispatch(success(nome));
                    dispatch(alertActions.success('Contato enviado' ));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error("Erro ao enviar email."));
                }
            )
    };

    function request(idControle) { return { type: mailcontroleConstants.CREATE_REQUEST, idControle } }
    function success(idControle) { return { type: mailcontroleConstants.CREATE_SUCCESS, idControle } }
    function failure(error) { return { type: mailcontroleConstants.CREATE_FAILURE, error } }
}
