import React from 'react';
import React from 'react';
import store from "../../app/store"
import {Redirect} from "react-router-dom"
import Dashboard from "../../common/containers/Dashboard";



const HomeScreen = () => {
let isLoggedIn = store.getState().auth.isAuthenticated

  if(!isLoggedIn){
    return <Redirect to="/"/>
  }else{
  return(   
  <Dashboard />
  )
}

};

export default HomeScreen;
