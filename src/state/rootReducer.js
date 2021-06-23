import { combineReducers } from 'redux';
import authReducer from '../state/user/auth/authReducer';
import authErrorReducer from '../state/user/auth/authErrorReducer';
import hoursReducer from '../state/hours/hoursReducer';

export default combineReducers({
  auth: authReducer,
  error: authErrorReducer,
  hours: hoursReducer
});
