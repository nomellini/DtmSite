import { calendarioConstants } from '../_constants';

export function calendarios(state = {}, action) {
  switch (action.type) {
    case calendarioConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case calendarioConstants.GETALL_SUCCESS:
      return {
        items: action.calendarios
      };
    case calendarioConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
 
    default:
      return state
  }
}