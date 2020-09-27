import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';

import AppProvider from './components/AppProvider';
import App from './App';
import Routes from './routes';

ReactDOM.render(
  <AppProvider store={store}>
    <Routes>
      <App />
    </Routes>
  </AppProvider>,
  document.getElementById('root'),
);
