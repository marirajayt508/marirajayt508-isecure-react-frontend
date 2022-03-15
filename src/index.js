import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Loading} from './loading'
document.title = "Greed Tech"
document.addEventListener('load', ReactDOM.render(<Loading/>,document.getElementById('root')));
window.onload = function (){
  ReactDOM.render(<App />,document.getElementById('root'))
}



