import React from "react";
import "./style.scss";
import Title from "../../../common/components/Texts/Titles/index";
import BasicText from "../../../common/components/Texts/BasicText/index";
import DeleteIcon from '@material-ui/icons/Delete';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";



const Task = (props, index) => {
  return (

    <div onClick={props.handleClick} key={props.myKey} ref={props.myRef}  {...props.provDraggable }
    {...props.provDragHandle} className="task-box">
        <div className="container">    
      <Title>{props.title}</Title>
      </div>
      <div className="bin-icon-box"><DeleteIcon/></div>
      </div>
  
  );
};

export default Task;
