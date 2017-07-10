import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/home/Home';
import Dashboard from './components/dashboard/Dashboard';
import NotFound from './components/common/NotFound';

const Routes = () => (
  <main>
    <Switch>
      <Route path='/home' component={Home}/>
      <Route path='/dashboard' component={Dashboard}/>
      <Route exact path='/' render={() => (
        <h1>Welcome</h1>
      )}/>
      <Route path='*' component={NotFound}/>

    </Switch>
  </main>
);

export default Routes;
