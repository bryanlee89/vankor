import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

// Logger
const logger = createLogger();

// If Redux DevTools Extension is installed use it, otherwise use Redux compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Options: http://zalmoxisus.github.io/redux-devtools-extension/API/Arguments.html
  })
  : compose;

// Be sure to ONLY add immutable-state-invariant middleware in development!
let middlewares = [thunk];
middlewares =
  process.env.NODE_ENV !== 'production'
    ? [require('redux-immutable-state-invariant').default(), ...middlewares, logger]
    : middlewares;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

export default function (initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  // For react-hot-loader
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');

      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
