import React from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import HomeScreen from "./pages/HomePage/index"
import RegisterScreen from './pages/RegisterPage';
import StartScreen from './pages/StartPage/index';
<<<<<<< Updated upstream
=======
import { loadUser } from './state/user/auth/authAction';
import Dashboard from './common/containers/Dashboard/index';
import SettingsScreen from "./pages/SettingsPage/index";
>>>>>>> Stashed changes



function App() {
  return (
    <Router>
<<<<<<< Updated upstream
    <Switch>
      <Route exact path="/" component={StartScreen} />
      <Route exact path="/home" component={HomeScreen} />
      <Route exact path="/register" component={RegisterScreen} />
    </Switch>
  </Router>
=======
      <Switch>
        <Route exact path="/" component={StartScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/settings" component={SettingsScreen} />
        <PrivateRoute path="/home" component={HomeScreen} />
      </Switch>
    </Router>
>>>>>>> Stashed changes
  );
}

export default App;
