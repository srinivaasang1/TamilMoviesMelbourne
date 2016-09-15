import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Reduxpromise from 'redux-promise';

import App from './components/app';

const createStoreWithMiddleware = applyMiddleware(Reduxpromise)(createStore);

ReactDOM.render(
  <Provider>
    <App />
  </Provider>
  , document.getElementById('container1'));
