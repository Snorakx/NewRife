import {
  SET_USER_SETTINGS_FAILED,
  SET_USER_SETTINGS_SUCCESS,
  GET_USER_SETTINGS_SUCCESS,
} from '../hours/hoursTypes';

const initialState = {
  settingsAdded: false,
  monday:"",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER_SETTINGS_SUCCESS:
      return {
        ...state,
        settingsAdded: true,
      };
      case SET_USER_SETTINGS_FAILED:
      return {
        ...state,
        settingsAdded: false,
      };
      case GET_USER_SETTINGS_SUCCESS:
        return {
          ...state,
          monday: payload.monday,
          tuesday: payload.tuesday,
          wednesday: payload.wednesday,
          thursday: payload.thursday,
          friday: payload.friday,
          saturday: payload.saturday,
          sunday: payload.sunday
        }
  }
}
