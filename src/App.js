import React from 'react';
import Layout from './components/Layout';
import { Route, Switch } from 'react-router';
import Login from './components/auth/Login';
import TaskList from './components/tasks/TaskList';
import { InitAxios } from './api/HttpCommon';
import { Home } from './components/home/Home';
import { CreateTask } from './components/tasks/CreateTask';
import { EditTask } from './components/tasks/EditTask';

function App() {

  InitAxios();

  return (
    <Layout>
      <Switch>
        <Route exact path='/' > <Home /> </Route>
        <Route path='/tasks'> <TaskList /> </Route>
        <Route path='/tasks/create'> <CreateTask /> </Route>
        <Route path='/tasks/:id/edit'> <EditTask /> </Route>
        <Route path='/login'> <Login /> </Route>
      </Switch>
    </Layout>
  );
}

export default App;