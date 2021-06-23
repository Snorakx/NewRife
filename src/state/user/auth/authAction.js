import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  USER_LOADING,
  USER_LOADED,
  REGISTER_FAIL,
} from '../auth/authTypes';

import { returnErrors, clearErrors } from './authErrorActions';

//check token/ load

export const loadUser = () => (dispatch, getState) => {

  //loading user
  dispatch({ type: USER_LOADING });
  const token = getState().auth.token;



  const requestOptions = {
    method: 'get',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
  console.log(requestOptions);

  fetch(`${process.env.REACT_APP_API_URL}/api/auth/load`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      if (data.isSuccess === true) {
        dispatch({
          type: USER_LOADED,
          payload: data,
        });
      } else if (data.status !== 200) {
        dispatch(returnErrors(data.errors, data.title, data.traceId));
      }
    })
    .catch((err) => {
      throw err;
    });
};
export const loginUser = (email, password) => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  const credentials = {
    Email: email,
    Password: password,
  };

  const requestOptions = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  };
  console.log(requestOptions);
  fetch(`${process.env.REACT_APP_API_URL}/api/auth/login`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      if (data.isSuccess === true) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: data,
        });
        dispatch(clearErrors());
      } else if (data.status !== 200) {
        dispatch(returnErrors(data.errors, data.title, data.traceId));
        console.log(data);
      }
    })
    .catch((err) => {
      throw err;
    });
};
export const RegisterUser = (email, password, c_password) => (
  dispatch,
  getState,
) => {
  dispatch({ type: USER_LOADING });

  const credentials = {
    Email: email,
    Password: password,
    ConfirmPassword: c_password,
  };

  const requestOptions = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  };
  console.log(credentials);
  fetch(`${process.env.REACT_APP_API_URL}/api/auth/register`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      if (data.isSuccess === true) {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: data,
        });
        dispatch(clearErrors());
      } else if (data.status !== 200) {
        dispatch({
          type: REGISTER_FAIL,
          payload: data,
        });
        dispatch(returnErrors(data.errors, data.title, data.traceId));
        console.log(data);
      }
    })
    .catch((err) => {
      throw err;
    });
};
