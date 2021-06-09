import {
  SET_USER_SETTINGS_FAILED,
  SET_USER_SETTINGS_SUCCESS,
  GET_USER_SETTINGS_SUCCESS,
} from '../hours/hoursTypes';

import { useDispatch } from 'react-redux';


export const setSettings = (hoursPerDay) => (dispatch, getState) => {
  const token = getState().auth.token;

  const bodyData = {
    Monday: hoursPerDay.hoursPerMonday,
    Tuesday: hoursPerDay.hoursPerTuesday,
    Wednesday: hoursPerDay.hoursPerWednesday,
    Thursday: hoursPerDay.hoursPerThursday,
    Friday: hoursPerDay.hoursPerFriday,
    Saturday: hoursPerDay.hoursPerSaturday,
    Sunday: hoursPerDay.hoursPerSunday
  }

  const requestOptions = {
    method: 'post',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyData)
  };

  fetch('https://localhost:44348/api/userSettings/setSettings', requestOptions)
    .then((response) => response.json())
    .then((data) => {
      if (data.ID != null) {
        dispatch({
          type: SET_USER_SETTINGS_SUCCESS,
          payload: data,
        });
      } else if (data.status !== 200) {
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

export const getSettings = (hoursPerDay) => (dispatch, getState) => {
  const token = getState().auth.token;

  const requestOptions = {
    method: 'get',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
  console.log(requestOptions);

  fetch('https://localhost:44348/api/userSettings/getSettings', requestOptions)
    .then((response) => response.json())
    .then((data) => {
      if (data.isSuccess === true) {
        dispatch({
          type: GET_USER_SETTINGS_SUCCESS,
          payload: data,
        });
      } else if (data.status !== 200) {
        console.log("data")
      }
    })
    .catch((err) => {
      throw err;
    });
};
