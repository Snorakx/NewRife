import React, { useEffect } from 'react';
import store from "../../app/store"
import {Redirect} from "react-router-dom"
import Dashboard from "../../common/containers/dashboard"
import {getTasks} from "../../state/tasks/tasksAction";
import DayBox from "./components/day";
import DayContainer from "../HomePage/components/dayContainer"




const HomeScreen = () => {

  
let isLoggedIn = store.getState().auth.isAuthenticated;
let isNewUser = store.getState().hours.isNewUser;



  if(!isLoggedIn){
    return <Redirect to="/"/>
  }else if(!isNewUser){
  return(
    <Dashboard><DayContainer/></Dashboard>
  )}else{
    return(
      <Redirect to="/settings"/>
    )
  }

};

export default HomeScreen;
