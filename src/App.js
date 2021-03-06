import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';

import Avatar from './containers/Avatar/Avatar';
import Fire from './containers/Fire/Fire';
import Air from './containers/Air/Air';
import Water from './containers/Water/Water';
import Earth from './containers/Earth/Earth';

import classes from './app.module.css';

const App = props => {
  const routes = ( 
    <Switch>
      <Route
        path='/fire'
        component={Fire}
      />
      <Route
        path='/water'
        component={Water}
      />
      <Route
        path='/earth'
        component={Earth}
      />
      <Route
        path='/air'
        component={Air}
      />
      <Route
        path='/'
        exact
        component={Avatar}
      />  
      <Redirect 
        to='/'
      />
    </Switch>
  );


  return (  
    <div className={classes.wrapper}>
      <Layout>
        {routes}
      </Layout>
    </div>         
  );
}

export default withRouter(App);
