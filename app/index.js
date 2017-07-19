import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {HashRouter as Router} from 'react-router-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux'
import {getEmployees} from './actions/employeeActions';

import './css/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

const store = configureStore();

const render = () => ReactDOM.render((
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>
), document.getElementById('root'));

render();
