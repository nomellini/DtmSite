import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { noticias } from './noticias.reducer';
import { grupos } from './grupos.reducer';
import { gruporegister } from './grupos.register.reducer';

import { estados } from './estados.reducer';
import { cidades } from './cidades.reducer';
import { cidadesmodais } from './cidades.reducer';
import { solucaos } from './solucaos.reducer';

const rootReducer = combineReducers({
  authentication,
  users,
  gruporegister,

  alert,
  solucaos,
  grupos,
  noticias,
  estados,
  cidades,
  cidadesmodais
});

export default rootReducer;