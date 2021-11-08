import { solucaoConstants } from '../_constants';
import { solucaoService } from '../_services';
import { alertActions } from '.';
import { history } from '../_helpers';

export const solucaoActions = {
    getAll,
    Delete,
    Create,
    GetTbSolucaoBYSlug,
    getAllParent,
    GetTbSolucaoBYSlugNew
};

function Delete(Id) {
    return dispatch => {
        dispatch(request("excluir solucao"));
        solucaoService.Delete(Id)
            .then(
                empresa => { 
                    dispatch(success(Id));
                    //history.push('/empresas');
                    dispatch(alertActions.success('Solução excluída' ));
                    dispatch(getAll());
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(Id) { return { type: solucaoConstants.DELETE_REQUEST, Id } }
    function success(Id) { return { type: solucaoConstants.DELETE_SUCCESS, Id } }
    function failure(error) { return { type: solucaoConstants.DELETE_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        solucaoService.getAll()
            .then(
                solucaos => dispatch(success(solucaos)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: solucaoConstants.GETALL_REQUEST } }
    function success(solucaos) { return { type: solucaoConstants.GETALL_SUCCESS, solucaos } }
    function failure(error) { return { type: solucaoConstants.GETALL_FAILURE, error } }
}



function getAllParent() {
    return dispatch => {
        dispatch(request());

        solucaoService.getAllParent()
            .then(
                solucaos => dispatch(success(solucaos)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: solucaoConstants.GETALL_REQUEST } }
    function success(solucaos) { return { type: solucaoConstants.GETALL_SUCCESS, solucaos } }
    function failure(error) { return { type: solucaoConstants.GETALL_FAILURE, error } }
}


function GetTbSolucaoBYSlug(slug) {
    return dispatch => {
        dispatch(request());

        solucaoService.GetTbSolucaoBYSlug(slug)
            .then(
                solucaos => dispatch(success(solucaos)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: solucaoConstants.GETALL_REQUEST } }
    function success(solucaos) { return { type: solucaoConstants.GETALL_SUCCESS, solucaos } }
    function failure(error) { return { type: solucaoConstants.GETALL_FAILURE, error } }
}


function GetTbSolucaoBYSlugNew(slug) {
    return dispatch => {
        dispatch(request());

        solucaoService.GetTbSolucaoBYSlug(slug)
            .then(
                solucaosnew => dispatch(success(solucaosnew)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: solucaoConstants.NEW_GETALL_REQUEST } }
    function success(solucaosnew) { return { type: solucaoConstants.NEW_GETALL_SUCCESS, solucaosnew } }
    function failure(error) { return { type: solucaoConstants.NEW_GETALL_FAILURE, error } }
}


function Create(Id,Titulo,Menu,Conteudo,Slug) {
    return dispatch => {
        dispatch(request({ Id }));
        var IdInt = Id;

        solucaoService.Create(Id,Titulo,Menu,Conteudo,Slug)
            .then(
                Id => { 
                    dispatch(success(Id));
                    // history.push('/solucaos');
                    dispatch(alertActions.success('Solução ' + (IdInt == 0 ? 'adicionado' : 'editado') ));
                    dispatch(getAll());

                    // window.location.reload(false);

                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(Id) { return { type: solucaoConstants.CREATE_REQUEST, Id } }
    function success(Id) { return { type: solucaoConstants.CREATE_SUCCESS, Id } }
    function failure(error) { return { type: solucaoConstants.CREATE_FAILURE, error } }
}