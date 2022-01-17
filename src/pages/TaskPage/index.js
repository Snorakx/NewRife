import React, { useState, useEffect } from "react";
import store from "../../app/store";
import { Redirect } from "react-router-dom";
import Dashboard from "../../common/containers/dashboard";
import TasksContainer from "./components/tasksContainer";
import Task from "./components/task";
import CustomInput from "../../common/components/Input/index";
import { useDispatch, connect } from "react-redux";
import { addTask, dragAndDrop } from "../../state/tasks/tasksAction";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const TaskScreen = (props) => {
  const isLoggedIn = store.getState().auth.isAuthenticated;
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [repeatTask, setRepeatTask] = useState(false);
  const dayId = props.location.state.id.toString();

  const addTaskAsync = () => {
    dispatch(addTask(dayId, input, repeatTask));
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      props.tasksList,
      result.source.index,
      result.destination.index
    );

    dispatch(
      dragAndDrop(
        items,
        props.tasksList[result.source.index].id,
        props.tasksList[result.destination.index].id
      )
    );
  };

  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
  });

  const grid = 8;

  const getListStyle = (isDraggingOver) => ({
    width: "100%",
  });

  if (!isLoggedIn) {
    return <Redirect to="/" />;
  } else {
    return (
      <Dashboard>
        <CustomInput
          handleClick={addTaskAsync}
          val={input}
          onChng={(e) => setInput(e.target.value)}
        />
        {/* <input
          type="checkbox"
          value={repeatTask}
          onChange={(e) => setRepeatTask(e.target.checked)}
          label="Powtórz zadanie co tydzień"
        ></input> */}
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                className="task-container-dnd"
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                {props.tasksList.map((item, index) => {
                  return (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <Task
                          myRef={provided.innerRef}
                          provDraggable={provided.draggableProps}
                          provDragHandle={provided.dragHandleProps}
                          styles={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                          myKey={item.id}
                          title={item.title}
                          description={item.description}
                          key={item.id}
                          index={index}
                          id={item.id}
                        />
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Dashboard>
    );
  }
};
function mapStateToProps(state, ownProps) {
  const todos = state.tasks.tasksList;
  let tasksForThisDay = [];
  if (todos != null) {
    todos.forEach((item) => {
      if (item.dayID === ownProps.location.state.id.toString()) {
        tasksForThisDay.push(item);
      }
    });
  }

  return { tasksList: tasksForThisDay };
}

export default connect(mapStateToProps)(TaskScreen);
