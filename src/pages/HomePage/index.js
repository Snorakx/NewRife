import React from 'react';
import store from "../../app/store"
import {Redirect} from "react-router-dom"
import Dashboard from "../../common/containers/dashboard"
import Settings from "../../pages/SettingsPage/index"




const HomeScreen = () => {
let isLoggedIn = store.getState().auth.isAuthenticated

  if(!isLoggedIn){
    return <Redirect to="/"/>
  }else{
  return(   
    <Dashboard><Settings></Settings></Dashboard>
  )
}

};

export default HomeScreen;
