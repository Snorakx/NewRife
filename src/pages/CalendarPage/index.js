import React from "react";
import { Redirect } from "react-router-dom";
import Dashboard from "../../common/containers/dashboard/index";
import SettingsPage from "../SettingsPage/index";
import { useSelector } from "react-redux";

const Calendar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  if (!isLoggedIn) {
    return <Redirect to="/" />;
  } else {
    return (
      <div>
        <Dashboard>
          <SettingsPage />
        </Dashboard>
      </div>
    );
  }
};

export default Calendar;
