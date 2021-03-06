import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MainPage from './MainPage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import EffectDemo from './EffectDemo';
import PokeMonAPIDemo from './PokeMonAPIDemo';
import MainPageRouter from './RouterDemo/MainPageRouter';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
  <BrowserRouter>
    <MainPageRouter />
  </BrowserRouter>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
