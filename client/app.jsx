// entry file for application

// import third-party apps
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { createStore } from 'redux';

import store from './redux/store';

// import root app
import App from './components/container/App/App';

const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  MOUNT_NODE,
);
