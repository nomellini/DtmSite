import { estadoConstants } from '../_constants';
import { estadoService } from '../_services';
import { alertActions } from '.';
import { history } from '../_helpers';

export const estadoActions = {
    getAll
};


function getAll() {
    return dispatch => {
        dispatch(request());

        estadoService.getAll()
            .then(
                estados => dispatch(success(estados)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: estadoConstants.GETALL_REQUEST } }
    function success(estados) { return { type: estadoConstants.GETALL_SUCCESS, estados } }
    function failure(error) { return { type: estadoConstants.GETALL_FAILURE, error } }
}
