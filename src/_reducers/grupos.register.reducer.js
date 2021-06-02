import { grupoConstants } from '../_constants';

const initialState = { loading: false } ;


export function gruporegister(state = initialState, action) {
  switch (action.type) {
    case grupoConstants.CREATE_REQUEST:
      return { loading: true };
    case grupoConstants.CREATE_SUCCESS:
      return {loading: false, sucess: true,error: false};

    case grupoConstants.CREATE_FAILURE:
      return {loading: false,error: true, sucess: false};
    default:
      return state
  }
}