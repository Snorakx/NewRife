import { combineReducers } from 'redux';
import authReducer from '../state/user/auth/authReducer';
import authErrorReducer from '../state/user/auth/authErrorReducer';

export default combineReducers({
  auth: authReducer,
  error: authErrorReducer,
});
