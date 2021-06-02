import { noticiaConstants } from '../_constants';

export function noticias(state = {}, action) {
  switch (action.type) {
    case noticiaConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case noticiaConstants.GETALL_SUCCESS:
      return {
        items: action.noticias
      };
    case noticiaConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}