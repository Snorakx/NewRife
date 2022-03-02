import {
  SET_USER_SETTINGS_FAILED,
  SET_USER_SETTINGS_SUCCESS,
  GET_USER_SETTINGS_SUCCESS,
  ADD_USER_WORKING_HOUR,
  USER_NEW_LEVEL,
  SHOW_OPTIONS_TO_NEW_USER,
} from "../hours/hoursTypes";
import { SET_DONE_TASK } from "../tasks/taskTypes";
import { changeTaskStateToDone } from "../tasks/tasksAction";

/**
 ** POST Action with endpoint to set settings(hourPerDay) for new user or change settings using options
 **/
export const setSettings = (hoursPerDay) => (dispatch, getState) => {
  const token = getState().auth.token;
  const isNotFirstSetSetting = getState().hours.settingsAdded;

  const bodyData = {
    Monday: hoursPerDay.hoursPerMonday,
    Tuesday: hoursPerDay.hoursPerTuesday,
    Wednesday: hoursPerDay.hoursPerWednesday,
    Thursday: hoursPerDay.hoursPerThursday,
    Friday: hoursPerDay.hoursPerFriday,
    Saturday: hoursPerDay.hoursPerSaturday,
    Sunday: hoursPerDay.hoursPerSunday,
  };

  const requestOptions = {
    method: "post",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyData),
  };

  fetch(
    `${process.env.REACT_APP_API_URL}/api/userSettings/setSettings`,
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.id != null) {
        dispatch({
          type: SET_USER_SETTINGS_SUCCESS,
          payload: data,
        });
        if (isNotFirstSetSetting) {
          dispatch(getSettings());
        }
      } else {
        dispatch({
          type: SET_USER_SETTINGS_FAILED,
          payload: data,
        });
      }
    })
    .catch((err) => {
      throw err;
    });
};

/**
 ** GET Action with endpoint to get settings(hours per day) for new user or change settings using options
 **/
export const getSettings = (hoursPerDay) => (dispatch, getState) => {
  const token = getState().auth.token;

  const requestOptions = {
    method: "get",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  fetch(
    `${process.env.REACT_APP_API_URL}/api/userSettings/getSettings`,
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.isSuccess === true) {
        dispatch({
          type: GET_USER_SETTINGS_SUCCESS,
          payload: data,
        });
      } else {
        dispatch({
          type: SHOW_OPTIONS_TO_NEW_USER,
        });
      }
    })
    .catch((err) => {
      throw err;
    });
};

/**
 ** POST Action with endpoint to add one worked hour to user account
 **/
export const addUserWorkedHour = () => (dispatch, getState) => {
  const token = getState().auth.token;

  const requestOptions = {
    method: "post",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  fetch(`${process.env.REACT_APP_API_URL}/api/level/addhour`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      if (data.isSuccess === true) {
        dispatch({
          type: ADD_USER_WORKING_HOUR,
          payload: data,
        });
        if (data.NewLevel === true) {
          dispatch({
            type: USER_NEW_LEVEL,
            payload: data,
          });
        }
      } else if (data.status !== 200) {
        console.log(data.isSuccess);
      }
    })
    .catch((err) => {
      throw err;
    });
};
