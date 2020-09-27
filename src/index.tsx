import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';

import AppProvider from './components/AppProvider';
import App from './App';

ReactDOM.render(
  <AppProvider store={store}>
    <App />
  </AppProvider>,
  document.getElementById('root'),
);
