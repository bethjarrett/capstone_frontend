import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { reducers } from './reducers';

import App from './App';
import './index.css';
import "./components/bootstrap/css/bootstrap.min.css"

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
