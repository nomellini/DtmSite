import { createStore, applyMiddleware,compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../_reducers';
import thunk from 'redux-thunk';

const loggerMiddleware = createLogger();

let middleware = [];
if (process.env.NODE_ENV == 'development') {
  middleware = [...middleware, thunk, loggerMiddleware];
} else {
  middleware = [...middleware, thunk];
}

export const store =  createStore(
    rootReducer,
    compose(applyMiddleware(...middleware))
  );