import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './redux/store';
import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';

ReactDOM.render(
  <Provider store={store}> 
  <BrowserRouter>   
     <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
