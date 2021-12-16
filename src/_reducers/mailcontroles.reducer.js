import { mailcontroleConstants } from '../_constants';

export function mailcontroles(state = {}, action) {
  switch (action.type) {
    case mailcontroleConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case mailcontroleConstants.GETALL_SUCCESS:
      return {
        items: action.mailcontroles
      };
    case mailcontroleConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}