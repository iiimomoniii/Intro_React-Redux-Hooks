import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Redux Begin
//hoc
import { Provider } from 'react-redux';
//function for create store
import {createStore, applyMiddleware} from 'redux';
//print log
import logger from 'redux-logger';
import thunk from 'redux-thunk';
//reducers
import reducers from './reducers/';
//Redux End

//prepared store
const store = createStore(reducers, applyMiddleware(thunk, logger));

//prepared ReduxApp
const ReduxApp = ()=> {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
}

//replace from App to ReduxApp
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReduxApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
