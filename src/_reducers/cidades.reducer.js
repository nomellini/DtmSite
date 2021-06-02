import { cidadeConstants } from '../_constants';

export function cidades(state = {}, action) {
  switch (action.type) {
    case cidadeConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case cidadeConstants.GETALL_SUCCESS:
      return {
        items: action.cidades
      };
    case cidadeConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}



export function cidadesmodais(state = {}, action) {
  switch (action.type) {
    case cidadeConstants.GETALL_REQUEST_MODAL:
      return {
        loading: true
      };
    case cidadeConstants.GETALL_SUCCESS_MODAIS:
      return {
        items: action.cidadesmodais
      };
    case cidadeConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}