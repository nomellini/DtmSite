import { cidadeConstants } from '../_constants';
import { cidadeService } from '../_services';
import { alertActions } from '.';
import { history } from '../_helpers';

export const cidadeActions = {
    getAll,
    GetCidadesByUF,
    GetCidadesByUFModal
};


function getAll() {
    return dispatch => {
        dispatch(request());

        cidadeService.getAll()
            .then(
                cidades => dispatch(success(cidades)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: cidadeConstants.GETALL_REQUEST } }
    function success(cidades) { return { type: cidadeConstants.GETALL_SUCCESS, cidades } }
    function failure(error) { return { type: cidadeConstants.GETALL_FAILURE, error } }
}


function GetCidadesByUF(uf) {
    return dispatch => {
        dispatch(request());

        cidadeService.GetCidadesByUF(uf)
            .then(
                cidades => dispatch(success(cidades)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: cidadeConstants.GETALL_REQUEST } }
    function success(cidades) { return { type: cidadeConstants.GETALL_SUCCESS, cidades } }
    function failure(error) { return { type: cidadeConstants.GETALL_FAILURE, error } }
}


function GetCidadesByUFModal(uf) {
    return dispatch => {
        dispatch(request());

        cidadeService.GetCidadesByUF(uf)
            .then(
                cidadesmodais => dispatch(success(cidadesmodais)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: cidadeConstants.GETALL_REQUEST_MODAL } }
    function success(cidadesmodais) { return { type: cidadeConstants.GETALL_SUCCESS_MODAIS, cidadesmodais } }
    function failure(error) { return { type: cidadeConstants.GETALL_FAILURE, error } }
}