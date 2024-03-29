import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAILED,
  REGISTER_FAIL,
  LOGOUT_SUCCESS,
} from "../auth/authTypes";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: null,
};

export default function authReducerFunction(state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action?.payload?.userData ?? "",
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.message);
      return {
        ...state,
        token: action.payload.message,
        isAuthenticated: true,
        isLoading: false,
        user: action?.payload?.userData ?? "",
      };
    case AUTH_ERROR:
    case LOGIN_FAILED:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };

    default:
      return state;
  }
}
