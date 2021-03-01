import React from 'react';
import Layout from './components/Layout';
import { Route, Switch } from 'react-router';
import Login from './components/auth/Login';
import TaskList from './components/tasks/TaskList';
import { InitAxios } from './api/HttpCommon';

function App() {

  InitAxios();

  return (
    <Layout>
      <Switch>
        {/* <Route exact path='/' component={Home} /> */}
        <Route path='/tasks'> <TaskList /> </Route>
        <Route path='/login'> <Login /> </Route>
      </Switch>
    </Layout>
  );
}

export default App;
