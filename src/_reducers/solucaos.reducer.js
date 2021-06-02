import { solucaoConstants } from '../_constants';

export function solucaos(state = {}, action) {
  switch (action.type) {
    case solucaoConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case solucaoConstants.GETALL_SUCCESS:
      return {
        items: action.solucaos
      };
    case solucaoConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}