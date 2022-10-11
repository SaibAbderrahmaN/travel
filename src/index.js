import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import thunk from 'redux-thunk';
import App from './App'
import './index.css'
import {  applyMiddleware, compose , createStore} from 'redux';


import  reducers from './reducers/index'


const store = createStore(reducers, compose(applyMiddleware(thunk)))
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      </Provider>
        </BrowserRouter>
    ,
    document.getElementById('root')
  );