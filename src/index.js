import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const target = document.querySelector('#root')
const store = configureStore();

render(
  <Provider store={store}>
      <App />
  </Provider>,
  target
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
