import { grupoConstants } from '../_constants';

export function grupos(state = {}, action) {
  switch (action.type) {
    case grupoConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case grupoConstants.GETALL_SUCCESS:
      return {
        items: action.grupos
      };
    case grupoConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
 
    default:
      return state
  }
}