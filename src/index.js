import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './styles/global.css';
import { register } from './serviceWorker';
import configureStore from './store'
import { App } from './components';


ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

register();
