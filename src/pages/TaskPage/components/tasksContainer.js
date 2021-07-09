import React from "react";
import "./style.scss";
import Task from "./task"


const TasksContainer = (props) => {
  return (
    <div className="tasks-container">
     {props.children}
    </div>
  );
};

export default TasksContainer;
