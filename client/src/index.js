import 'materialize-css/';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-social/css/style.css';
import 'materialize-social/materialize-social.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'; // For react-hot-loader
import { Provider } from 'react-redux';

import App from './components/App';
import createStore from './store/configureStore';

// TODO: Set initialState
const initialState = {};
const store = createStore(initialState);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  );
};
render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    render(NextApp);
  });
}
