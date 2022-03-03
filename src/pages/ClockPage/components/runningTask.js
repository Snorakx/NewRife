import React from "react";
import PrimaryBtn from "../../../common/components/PrimaryBtn";
import "./tasksForToday.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeTaskStateToDone } from "../../../state/tasks/tasksAction";
import EmptyTasksList from "./emptyTasksList";

const RunningTask = ({ isStarted }) => {
  const dispatch = useDispatch();

  const todayTasksTodo = useSelector((state) => state.tasks.tasksForToday);
  const areTasksForToday = Boolean(todayTasksTodo.length);

  const handleClick = (taskID) => {
    dispatch(changeTaskStateToDone(taskID));
  };

  return (
    <div className="running-task-container">
      {!areTasksForToday ? (
        <EmptyTasksList />
      ) : (
        todayTasksTodo.map((task) => {
          return (
            <div className="holder" key={task.order}>
              <div className={`text ${isStarted ? "isStarted" : ""}`}>
                {task.title}
              </div>
              {isStarted && (
                <PrimaryBtn handleClick={() => handleClick(task.id)}>
                  Zrobione!
                </PrimaryBtn>
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

export default RunningTask;
