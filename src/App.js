import React, { useEffect, getState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import store from './app/store';
import HomeScreen from './pages/HomePage/index';
import LoginScreen from './pages/LoginPage';
import RegisterScreen from './pages/RegisterPage';
import StartScreen from './pages/StartPage/index';
import { loadUser } from './state/user/auth/authAction';

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  });

  function PrivateRoute({ component: Component, authed, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) =>
          store.getState().auth.isAuthenticated === true ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: '/login', state: { from: props.location } }}
            />
          )
        }
      />
    );
  }
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={StartScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/login" component={LoginScreen} />
        <PrivateRoute path="/home" component={HomeScreen} />
      </Switch>
    </Router>
  );
}

export default App;
