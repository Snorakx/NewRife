import React from "react";
import { Redirect } from "react-router-dom";
import Dashboard from "../../common/containers/dashboard";
import { useSelector } from "react-redux";

import DayContainer from "../HomePage/components/dayContainer";

const HomeScreen = () => {
  const isNewUser = useSelector((state) => state.hours.isNewUser);
  const token = useSelector((state) => state.auth.token);
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  const isUserAuth = () => {
    return Boolean(isLoggedIn && token);
  };

  if (!isLoggedIn || !token) {
    return <Redirect to="/" />;
  }

  if (isNewUser) {
    return <Redirect to="/settings" />;
  }

  if (isUserAuth) {
    return (
      <Dashboard>
        <DayContainer />
      </Dashboard>
    );
  }
};

export default HomeScreen;
