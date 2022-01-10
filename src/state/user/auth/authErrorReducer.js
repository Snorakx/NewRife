import { GET_ERRORS, CLEAR_ERRORS } from "../auth/authTypes";

const initialState = {
  msg: '',
  errorsList: [],
};
export default function authErrorReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        msg: action.payload.message,
        errorsList: action.payload.errors, 
      };
    case CLEAR_ERRORS:
      return state;
    default:
      return state;
  }
}
