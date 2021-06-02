import { estadoConstants } from '../_constants';

export function estados(state = {}, action) {
  switch (action.type) {
    case estadoConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case estadoConstants.GETALL_SUCCESS:
      return {
        items: action.estados
      };
    case estadoConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}