import { noticiaConstants } from '../_constants';
import { noticiaService } from '../_services';
import { alertActions } from '.';
import { history } from '../_helpers';

export const noticiaActions = {
    getAll,
    Delete,
    Create
    ,get
};

function Delete(notId) {
    return dispatch => {
        dispatch(request("excluir noticia"));
        noticiaService.Delete(notId)
            .then(
                empresa => { 
                    dispatch(success(notId));
                    //history.push('/empresas');
                    dispatch(alertActions.success('Notícia excluída' ));
                    dispatch(getAll());
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(notId) { return { type: noticiaConstants.DELETE_REQUEST, notId } }
    function success(notId) { return { type: noticiaConstants.DELETE_SUCCESS, notId } }
    function failure(error) { return { type: noticiaConstants.DELETE_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        noticiaService.getAll()
            .then(
                noticias => dispatch(success(noticias)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: noticiaConstants.GETALL_REQUEST } }
    function success(noticias) { return { type: noticiaConstants.GETALL_SUCCESS, noticias } }
    function failure(error) { return { type: noticiaConstants.GETALL_FAILURE, error } }
}



function get(notId) {
    return dispatch => {
        dispatch(request());

        noticiaService.get(notId)
            .then(
                noticias => dispatch(success(noticias)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: noticiaConstants.GETALL_REQUEST } }
    function success(noticias) { return { type: noticiaConstants.GETALL_SUCCESS, noticias } }
    function failure(error) { return { type: noticiaConstants.GETALL_FAILURE, error } }
}

function Create(notId,notTitulo,notResenha,notConteudo,notFonte,notImagem,notComentario,notVigenciaInicio,notVigenciaFim,notStatus,notIdCategoria,formData) {
    return dispatch => {
        dispatch(request({ notId }));
        var notIdInt = notId;

        noticiaService.Create(notId,notTitulo,notResenha,notConteudo,notFonte,notImagem,notComentario,notVigenciaInicio,notVigenciaFim,notStatus,parseInt(notIdCategoria),formData)
            .then(
                notId => { 
                    dispatch(success(notId));
                    // history.push('/noticias');
                    dispatch(alertActions.success('Notícia ' + (notIdInt == 0 ? 'adicionado' : 'editado') ));
                    dispatch(getAll());

                    // window.location.reload(false);

                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(notId) { return { type: noticiaConstants.CREATE_REQUEST, notId } }
    function success(notId) { return { type: noticiaConstants.CREATE_SUCCESS, notId } }
    function failure(error) { return { type: noticiaConstants.CREATE_FAILURE, error } }
}