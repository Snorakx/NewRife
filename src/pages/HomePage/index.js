import React from 'react';
import store from "../../app/store"
import {Redirect} from "react-router-dom"



const HomeScreen = () => {
let isLoggedIn = store.getState().auth.isAuthenticated

  if(!isLoggedIn){
    return <Redirect to="/"/>
  }else{
  return(   
  <div>Home Home Home Home Home Home Home Home</div>
  )
}
};

export default HomeScreen;
