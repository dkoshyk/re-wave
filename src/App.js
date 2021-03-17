import React from 'react';
import Layout from './components/Layout';
import { Route, Switch } from 'react-router';
import Login from './components/auth/Login';
import TaskList from './components/tasks/TaskList';
import { initAxios } from './api/HttpCommon';
import { Home } from './components/home/Home';
import { CreateTask } from './components/tasks/CreateTask';
import { EditTask } from './components/tasks/EditTask';
import NotFound from './components/NotFound';
import { AuthorizeRoute } from './components/auth/AuthorizeRoute';

function App() {

  initAxios();

  return (
    <Layout>
      <Switch>
        <Route exact path='/'> <Home /> </Route>
        <AuthorizeRoute path='/tasks/create'> <CreateTask /> </AuthorizeRoute>
        <AuthorizeRoute path='/tasks/:id/edit'> <EditTask /> </AuthorizeRoute>
        <AuthorizeRoute path='/tasks'> <TaskList /> </AuthorizeRoute>
        <Route path='/login'> <Login /> </Route>
        <Route exact path='*'> <NotFound /> </Route>
      </Switch>
    </Layout>
  );
}

export default App;