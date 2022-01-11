import React from "react";
import store from "../../app/store";
import { Redirect } from "react-router-dom";
import Dashboard from "../../common/containers/dashboard/index";

const UserScreen = () => {
  let isLoggedIn = store.getState().auth.isAuthenticated;

  if (!isLoggedIn) {
    return <Redirect to="/" />;
  } else {
    return (
      <div>
        <Dashboard></Dashboard>
      </div>
    );
  }
};

export default UserScreen;
