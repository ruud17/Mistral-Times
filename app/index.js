import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {HashRouter as Router} from 'react-router-dom';
//import {createStore} from 'redux';
//import Routes from './routes';
import './css/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import {Provider} from 'react-redux'

//const store = createStore(CounterReducer);

const render = () => ReactDOM.render((
  <Router>
    <App/>
  </Router>
), document.getElementById('root'));

render();
