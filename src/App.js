import React from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import HomeScreen from "./pages/HomePage/index"
import RegisterScreen from './pages/RegisterPage';
import StartScreen from './pages/StartPage/index';



function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={StartScreen} />
      <Route exact path="/home" component={HomeScreen} />
      <Route exact path="/register" component={RegisterScreen} />
    </Switch>
  </Router>
  );
}

export default App;
