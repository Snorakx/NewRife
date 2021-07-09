import { PlaylistAddOutlined } from "@material-ui/icons";
import {
    ADD_TASK,
    ADD_TASK_SUCCESS,
    ADD_TASK_FAILED,
    EDIT_TASK,
    EDIT_TASK_SUCCESS,
    EDIT_TASK_FAILED,
    DELETE_TASK,
    DELETE_TASK_SUCCESS,
    DELETE_TASK_FAILED,
    GET_TASKS,
    GET_TASKS_SUCCESS,
    GET_TASKS_FAILED,
    DRAG_AND_DROP
  } from "../tasks/taskTypes";

  const initialState = {
    loadingTasks:false,
    tasksLoaded:false,
    tasksList:[],
    addingTask:false,
    addTaskSuccess:false
  };

  export default function hourReducerFunction(state = initialState, action) {
    switch (action.type) {
      case GET_TASKS:
        return {
        ...state,
        loadingTasks:true,
        tasksLoaded:false,
        tasksList: action.payload
        };
    case GET_TASKS_SUCCESS:
        return {
        ...state,
        loadingTasks:false,
        tasksLoaded:true,
        tasksList: action.payload
        };
    case GET_TASKS_FAILED:
        return {
        ...state,
        laodingTasks:false,
        tasksLoaded:false,
        };
      case ADD_TASK:
        return {
        ...state,
        loadingTasks:true,
        addingTask:false,
        tasksLoaded:false,
        };
    case ADD_TASK_SUCCESS:
      console.log(action.payload)
        return {
        ...state,
        addingTask:false,
        addTaskSuccess:true,
        tasksList: [action.payload, ...state.tasksList]
        };
    case ADD_TASK_FAILED:
        return {
        ...state,
        laodingTasks:false,
        tasksLoaded:false,
        addTaskSuccess:false,
        };
      case DRAG_AND_DROP:
        return {
        ...state,
        tasksList: [...action.payload]
        };
    default:
        return state;
    }
  }
  