import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/home/Home';
import Dashboard from './components/dashboard/Dashboard';
import NotFound from './components/common/NotFound';
import CreatePraiseOrCriticism from './components/create/createPraiseOrCriticism';

const Routes = () => (
    <Switch>
      <Route path='/create' component={CreatePraiseOrCriticism}/>
      <Route path='/dashboard' component={Dashboard}/>
      <Route exact path='/' component={Home}/>
      <Route path='*' component={NotFound}/>
    </Switch>
);

export default Routes;
