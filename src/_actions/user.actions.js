import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout,
    getAll,
    atualizar,
    updatePwd
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/lgpd-home');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    history.push('/lgpd');
    return { type: userConstants.LOGOUT };
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}


function atualizar(user) {
    return dispatch => {
        dispatch(request({ user }));

        userService.atualizar(user)
            .then(
                idTreinamento => { 
                    dispatch(success(user));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error("Erro ao atualizar"));
                }
            );
    };

    function request(user) { return { type: userConstants.CREATE_REQUEST, user } }
    function success(user) { return { type: userConstants.CREATE_SUCCESS, user } }
    function failure(error) { return { type: userConstants.CREATE_FAILURE, error } }
}

function updatePwd(idUsuario,senha,novasenha,confirmacaosenha) {
    return dispatch => {
        dispatch(request({ idUsuario }));

        userService.updatePwd(idUsuario,senha,novasenha,confirmacaosenha)
            .then(
                idTreinamento => { 
                    dispatch(success(idUsuario));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error("Erro ao atualizar"));
                }
            );
    };

    function request(idUsuario) { return { type: userConstants.CREATE_REQUEST, idUsuario } }
    function success(idUsuario) { return { type: userConstants.CREATE_SUCCESS, idUsuario } }
    function failure(error) { return { type: userConstants.CREATE_FAILURE, error } }
}