import React from 'react';
import store from '../../app/store';
import Form from './components/LoginRegiserChoose/login-form';
import {Redirect} from "react-router-dom"


const StartScreen = () => {
  
  let isLoggedIn = store.getState().auth.isAuthenticated

  if(isLoggedIn){
    return <Redirect to="/home"/>
  }else{
  return(   
    <Form />

  )
}

};

export default StartScreen;
