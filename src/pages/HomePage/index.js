<<<<<<< Updated upstream
import React from "react";
import Dashboard from "../../common/containers/dashboard/index";
import BottomNavigation from "../../common/containers/bottom-nav/index";


const HomeScreen = () => {
    return ( 
    <div>
        <Dashboard />
    </div>
    );
=======
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
>>>>>>> Stashed changes
};

export default HomeScreen;