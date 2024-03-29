import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  USER_LOADING,
  USER_LOADED,
  REGISTER_FAIL,
  LOGOUT_SUCCESS,
  LOGIN_FAILED,
} from "../auth/authTypes";
import { getSettings } from "../../hours/hoursAction";
import { getTasks } from "../../tasks/tasksAction";

import { returnErrors, clearErrors } from "./authErrorActions";

/**
 ** GET Action with endpoint to check if bearer is exist in localstorage or is not expired to log in user without email, password
 **/
export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  const token = getState().auth.token;

  const requestOptions = {
    method: "get",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  fetch(`${process.env.REACT_APP_API_URL}/api/auth/load`, requestOptions)
    .then((response) => {
      if (response.status === 401) {
        dispatch({
          type: LOGIN_FAILED,
        });
      } else {
        return response.json();
      }
    })
    .then((data) => {
      if (data?.isSuccess) {
        dispatch({
          type: USER_LOADED,
          payload: data,
        });
        dispatch(getSettings());
        dispatch(getTasks());
      } else {
        dispatch({
          type: LOGIN_FAILED,
        });
      }
    })
    .catch((err) => {
      throw err;
    });
};

/**
 ** POST Action with endpoint to log in user with email, password
 **/
export const loginUser = (email, password) => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  const credentials = {
    Email: email,
    Password: password,
  };

  const requestOptions = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  };

  fetch(`${process.env.REACT_APP_API_URL}/api/auth/login`, requestOptions)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.isSuccess) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: data,
        });

        dispatch(getSettings());
        dispatch(getTasks());
        dispatch(clearErrors());
      } else {
        dispatch({
          type: LOGIN_FAILED,
        });

        dispatch(returnErrors(data.message ?? data.title, data.errors));
      }
    })
    .catch((err) => {
      throw err;
    });
};

/**
 ** POST Action with endpoint to register user with email, password,confirm password
 **/
export const RegisterUser = (email, password, c_password) => (dispatch) => {
  dispatch({ type: USER_LOADING });

  const credentials = {
    Email: email,
    Password: password,
    ConfirmPassword: c_password,
  };

  const requestOptions = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  };

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

        dispatch(returnErrors(data.message, data.errors));
      }
    })
    .catch((err) => {
      throw err;
    });
};
/**
 ** Action to log out user (remove Bearer from LocalStorage and redux store)
 **/
export const logoutUser = () => (dispatch) => {
  dispatch({ type: LOGOUT_SUCCESS });
};
