import React from "react";
import store from "../../app/store";
import { Redirect } from "react-router-dom";
import Timer from "../ClockPage/components/timer"
import Dashboard from "../../common/containers/dashboard/index"

const TimerScreen = () => {
  let isLoggedIn = store.getState().auth.isAuthenticated;
  
  if (!isLoggedIn) {
    return <Redirect to="/" />;
  } else {
    return (
      <div>
      <Dashboard><Timer /></Dashboard>
      </div>
    )
  }
};

export default TimerScreen;
