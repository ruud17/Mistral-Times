import React from 'react';
import Header from './common/Header';
import Routes from '../routes';
// import {HashRouter as Router, Link, Route} from 'react-router-dom';
// import Home from './home/Home';
// import Dashboard from './dashboard/Dashboard';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Routes/>
      </div>
    )
  }
}

export default App;
