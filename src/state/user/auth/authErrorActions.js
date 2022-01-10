import { GET_ERRORS, CLEAR_ERRORS } from "../auth/authTypes";

export const returnErrors = (message, errors) => {
  return {
    type: GET_ERRORS,
    payload: {message, errors},
  };
};
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
