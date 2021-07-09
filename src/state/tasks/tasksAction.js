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

export const getTasks = () => (dispatch, getState) => {
    const token = getState().auth.token;
    const requestOptions = {
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    console.log(requestOptions);
    dispatch({
        type: GET_TASKS,
      });
    fetch(
      `${process.env.REACT_APP_API_URL}/api/tasks/getTasks`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.isSuccess === false) {
          dispatch({
            type: GET_TASKS_FAILED,
            payload: data,
          });
        } else {
          dispatch({
            type: GET_TASKS_SUCCESS,
            payload:data
          });
          console.log(data)
        }
      })
      .catch((err) => {
        throw err;
      });
  };

  export const addTask = (dayId,input,repeatTask) => (dispatch, getState) => {
    const token = getState().auth.token;

    const postData = {
      Title:input,
      DayID: dayId,
      Description:null,
      RepeatTask:repeatTask,
      State:"To do"
    }
    console.log(postData)
    const requestOptions = {
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body:JSON.stringify(postData)
    };
    console.log(requestOptions);
    dispatch({
        type: ADD_TASK,
      });
    fetch(
      `${process.env.REACT_APP_API_URL}/api/tasks/addTask`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.isSuccess === false) {
          dispatch({
            type: ADD_TASK_FAILED,
            payload: data,
          });
        } else {
          dispatch({
            type: ADD_TASK_SUCCESS,
            payload:data
          });
          console.log(data)
        }
      })
      .catch((err) => {
        throw err;
      });
  };
  export const dragAndDrop = (newArray, sourceOrder,destinationOrder ) => (dispatch, getState) => {
    console.log(newArray)
    const token = getState().auth.token;

    dispatch({
      type: DRAG_AND_DROP,
      payload: [...newArray]
    });
    const postData = {
      SourceID:sourceOrder.toString(),
      DestinationID:destinationOrder.toString()
    }
    console.log(postData)
    const requestOptions = {
      method: "put",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body:JSON.stringify(postData)
    };
    console.log(requestOptions);
    fetch(
      `${process.env.REACT_APP_API_URL}/api/tasks/changeTaskOrder`,
      requestOptions
    )
  };