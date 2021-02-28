import React from 'react';
import Layout from './components/Layout';
import { Route } from 'react-router';
import { Switch } from '@material-ui/core';
import Login from './components/auth/Login';
import TaskList from './components/tasks/TaskList';

function App() {
  return (
    <Layout>

      {/* <Route exact path='/' component={Home} /> */}
      <Route path='/tasks'> <TaskList /> </Route>
      <Route path='/login'> <Login /> </Route>


    </Layout>
  );
}

export default App;
