import {
  SET_USER_SETTINGS_FAILED,
  SET_USER_SETTINGS_SUCCESS,
  GET_USER_SETTINGS_SUCCESS,
  ADD_USER_WORKING_HOUR,
  USER_NEW_LEVEL,
  SHOW_OPTIONS_TO_NEW_USER,
} from "../hours/hoursTypes";
const initialState = {
  settingsAdded: false,
  workedHours: 0,
  level: 0,
  isNewUser: false,
  tasksForToday: [],
};

export default function hourReducerFunction(state = initialState, action) {
  switch (action.type) {
    case SET_USER_SETTINGS_SUCCESS:
      return {
        ...state,
        settingsAdded: true,
        isNewUser: false,
      };
    case SET_USER_SETTINGS_FAILED:
      return {
        ...state,
        settingsAdded: false,
        isNewUser: true,
      };
    case GET_USER_SETTINGS_SUCCESS:
      return {
        ...state,
        monday: action.payload.monday,
        tuesday: action.payload.tuesday,
        wednesday: action.payload.wednesday,
        thursday: action.payload.thursday,
        friday: action.payload.friday,
        saturday: action.payload.saturday,
        sunday: action.payload.sunday,
        level: action.payload.level,
        hoursToNextLevel: action.payload.hoursToNextLevel,
        workedHours: action.payload.workedHours,
        settingsAdded: true,
      };
    case ADD_USER_WORKING_HOUR:
      return {
        ...state,
        workedHours: action.payload.workedHours,
        hoursToNextLevel: action.payload.hoursToNextLevel,
        level: action.payload.level,
      };
    case USER_NEW_LEVEL:
      return {
        ...state,
        wordkedHours: action.payload.workedHours,
        hoursToNextLevel: action.payload.hoursToNextLevel,
        level:
          action.payload.level !== null
            ? action.payload.level
            : state.workedHours.level,
        message: action.payload.message,
      };
    case SHOW_OPTIONS_TO_NEW_USER:
      return {
        ...state,
        isNewUser: true,
      };
    default:
      return state;
  }
}
