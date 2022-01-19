import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import Timer from "../ClockPage/components/timer";
import Dashboard from "../../common/containers/dashboard/index";
import { connect } from "react-redux";
import { getTasksForToday } from "../../state/tasks/tasksAction";

const TimerScreen = ({ isLoggedIn }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasksForToday());
  }, [dispatch]);

  if (!isLoggedIn) {
    return <Redirect to="/" />;
  } else {
    return (
      <div>
        <Dashboard>
          <Timer />
        </Dashboard>
      </div>
    );
  }
};
function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isAuthenticated,
  };
}

export default connect(mapStateToProps)(TimerScreen);
