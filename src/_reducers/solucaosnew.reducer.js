import { solucaoConstants } from '../_constants';

export function solucaosnew(state = {}, action) {
  switch (action.type) {
    case solucaoConstants.NEW_GETALL_REQUEST:
      return {
        loading: true
      };
    case solucaoConstants.NEW_GETALL_SUCCESS:
      return {
        items: action.solucaosnew
      };
    case solucaoConstants.NEW_GETALL_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}