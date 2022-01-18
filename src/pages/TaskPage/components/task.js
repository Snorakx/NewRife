import React from "react";
import "./style.scss";
import Title from "../../../common/components/Texts/Titles/index";
import BasicText from "../../../common/components/Texts/BasicText/index";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@mui/icons-material/Check";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { deleteTask, getTasks } from "../../../state/tasks/tasksAction";
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
