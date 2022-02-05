import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

window['renderModuleName'] = (containerId, contextData) => {
  let elementToMount = document.getElementById(containerId);
  ReactDOM.render(<App showMenu={false} />, elementToMount);
};

window['unmountModuleName'] = (containerId, contextData) => {
  let elementToUnMount = document.getElementById(containerId);
  ReactDOM.unmountComponentAtNode(elementToUnMount);
};

window['renderLocal'] = (containerId) => {
  let elementToMount = document.getElementById(containerId);
  ReactDOM.render(<App showMenu={true} />, elementToMount);
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
