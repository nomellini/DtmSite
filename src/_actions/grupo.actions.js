import { grupoConstants } from '../_constants';
import { calendarioConstants } from '../_constants';
import { grupoService } from '../_services';
import { alertActions } from '.';
import { history } from '../_helpers';

export const grupoActions = {
    getAll,
    Create,
    Delete,
    getBYId,
    FormNotificacaoDisp,
    getCalendario
};

function Delete(idTreinamento) {
    return dispatch => {
        dispatch(request("excluir grupo"));
        var empresaint = idTreinamento;
        grupoService.Delete(idTreinamento)
            .then(
                empresa => { 
                    dispatch(success(idTreinamento));
                    //history.push('/empresas');
                    dispatch(alertActions.success('Grupo excluído' ));
                    dispatch(getAll());
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error("Erro ao excluir grupo"));
                }
            );
    };

    function request(idTreinamento) { return { type: grupoConstants.DELETE_REQUEST, idTreinamento } }
    function success(idTreinamento) { return { type: grupoConstants.DELETE_SUCCESS, idTreinamento } }
    function failure(error) { return { type: grupoConstants.DELETE_FAILURE, error } }
}

function Create(idTreinamento,nome,categoria,descricao,conteudo,sinopse,preco,cargaHoraria,modulos, status,tipo,publicado="") {
    return dispatch => {
        dispatch(request({ idTreinamento }));
        var idTreinamentoint = idTreinamento;

        grupoService.Create(idTreinamento,nome,categoria,descricao,conteudo,sinopse,preco,cargaHoraria,modulos, status,tipo)
            .then(
                idTreinamento => { 
                    dispatch(success(idTreinamento));
                    history.push('/treinamentos');
                    if(publicado =="" ){
                    dispatch(alertActions.success('Grupo ' + (idTreinamentoint == 0 ? 'adicionado' : 'editado') ));}
                    if(publicado =="publicar" ){
                        dispatch(alertActions.success('Grupo ' + (idTreinamentoint == 0 ? 'adicionado' : 'publicado') ));
                    }

                    if(publicado =="despublicar" ){
                        dispatch(alertActions.success('Grupo ' + (idTreinamentoint == 0 ? 'adicionado' : 'despublicado') ));
                    }

                    dispatch(getAll());

                    // window.location.reload(false);

                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error("Erro ao salvar grupo"));
                }
            );
    };

    function request(idTreinamento) { return { type: grupoConstants.CREATE_REQUEST, idTreinamento } }
    function success(idTreinamento) { return { type: grupoConstants.CREATE_SUCCESS, idTreinamento } }
    function failure(error) { return { type: grupoConstants.CREATE_FAILURE, error } }
}




function FormNotificacaoDisp(idTreinamento,nome,estado,cidade,empresa,codigo) {
    return dispatch => {
        dispatch(request({ idTreinamento }));
        var idTreinamentoint = idTreinamento;

        grupoService.FormNotificacaoDisp(idTreinamento,nome,estado,cidade,empresa,codigo)
            .then(
                idTreinamento => { 
                    dispatch(success(idTreinamento));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error("Erro ao enviar formulário"));
                }
            );
    };

    function request(idTreinamento) { return { type: grupoConstants.CREATE_REQUEST, idTreinamento } }
    function success(idTreinamento) { return { type: grupoConstants.CREATE_SUCCESS, idTreinamento } }
    function failure(error) { return { type: grupoConstants.CREATE_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        grupoService.getAll()
            .then(
                grupos => dispatch(success(grupos)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: grupoConstants.GETALL_REQUEST } }
    function success(grupos) { return { type: grupoConstants.GETALL_SUCCESS, grupos } }
    function failure(error) { return { type: grupoConstants.GETALL_FAILURE, error } }
}


function getCalendario() {
    return dispatch => {
        dispatch(request());

        grupoService.getCalendario()
            .then(
                calendarios => dispatch(success(calendarios)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: calendarioConstants.GETALL_REQUEST } }
    function success(calendarios) { return { type: calendarioConstants.GETALL_SUCCESS, calendarios } }
    function failure(error) { return { type: calendarioConstants.GETALL_FAILURE, error } }
}

function getBYId(idTreinamento) {
    return dispatch => {
        dispatch(request());

        grupoService.getBYId(idTreinamento)
            .then(
                grupos => dispatch(success(grupos)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: grupoConstants.GETALL_REQUEST } }
    function success(grupos) { return { type: grupoConstants.GETALL_SUCCESS, grupos } }
    function failure(error) { return { type: grupoConstants.GETALL_FAILURE, error } }
}