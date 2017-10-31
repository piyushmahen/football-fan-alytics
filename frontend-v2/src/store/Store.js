
import { applyMiddleware, createStore } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from '../reducers/Reducers';

const loggerMiddleware = createLogger({ predicate: () => ({ logger: console, diff: true }) });

let middleware = [promise(), thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware = [...middleware, loggerMiddleware];
}

export default createStore(reducer, applyMiddleware(...middleware));
