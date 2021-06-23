import {
  SET_USER_SETTINGS_FAILED,
  SET_USER_SETTINGS_SUCCESS,
  GET_USER_SETTINGS_SUCCESS,
  ADD_USER_WORKING_HOUR,
  USER_NEW_LEVEL
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

  fetch(`${process.env.REACT_APP_API_URL}/api/userSettings/setSettings`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      if (data.id != null) {
        dispatch({
          type: SET_USER_SETTINGS_SUCCESS,
          payload: data,
        });
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

  fetch(`${process.env.REACT_APP_API_URL}/api/userSettings/getSettings`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      if (data.isSuccess === true) {
        dispatch({
          type: GET_USER_SETTINGS_SUCCESS,
          payload: data,
        });
      } else if (data.isSuccess === false) {
        console.log(data)
      }
    })
    .catch((err) => {
      throw err;
    });
};
export const addUserWorkedHour =  () => (dispatch, getState) => {
  const token = getState().auth.token;

  const requestOptions = {
    method: 'post',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
  console.log(requestOptions);

  fetch(`${process.env.REACT_APP_API_URL}/api/level/addhour`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      if (data.isSuccess === true) {
        dispatch({
          type: ADD_USER_WORKING_HOUR,
          payload: data,
        });
        if(data.NewLevel === true){
          dispatch({
            type:USER_NEW_LEVEL,
            payload:data
          })
        }
      } else if (data.status !== 200) {
        console.log(data.isSuccess)
      }
    })
    .catch((err) => {
      throw err;
    });
};
