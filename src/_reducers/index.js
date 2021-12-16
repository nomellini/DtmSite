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
import { solucaosnew } from './solucaosnew.reducer';
import { calendarios } from './calendarios.reducer';
import { mailcontroles } from './mailcontroles.reducer';

const rootReducer = combineReducers({
  authentication,
  users,
  gruporegister,
  calendarios,
  alert,
  solucaos,
  grupos,
  noticias,
  estados,
  cidades,
  cidadesmodais,
  solucaosnew,
  mailcontroles
});

export default rootReducer;