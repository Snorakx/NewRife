import React from "react";
import "./style.scss";
import Title from "../../../common/components/Texts/Titles/index";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../../state/tasks/tasksAction";
import { GroupedSelect } from "./DropDown/dropDown";

const Task = (props, index) => {
  const dispatch = useDispatch();

  const handleDeleteTask = (e) => {
    dispatch(deleteTask(e));
  };
  return (
    <div
      onClick={props.handleClick}
      key={props.myKey}
      ref={props.myRef}
      {...props.provDraggable}
      {...props.provDragHandle}
      className="task-box"
    >
      <div className="container">
        <Title>
          {props.title}
          {props.state}
        </Title>
      </div>
      <div className="bin-icon-box">
        <GroupedSelect taskID={props.id} handleClick={handleDeleteTask} />
      </div>
    </div>
  );
};

export default Task;
