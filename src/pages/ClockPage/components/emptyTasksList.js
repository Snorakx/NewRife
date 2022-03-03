import React from "react";
import PrimaryBtn from "../../../common/components/PrimaryBtn";
import "./tasksForToday.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeTaskStateToDone } from "../../../state/tasks/tasksAction";

const EmptyTasksList = ({ isStarted }) => {
  const dispatch = useDispatch();

  const todayTasksTodo = useSelector((state) => state.tasks.tasksForToday);

  const handleClick = (taskID) => {
    dispatch(changeTaskStateToDone(taskID));
  };
  return (
    <div className="running-task-container">
      <div className="holder">
        <div className={`text ${isStarted ? "isStarted" : ""}`}>
          Brak zadań! Koniec na dziś czy skoczymy jeszcze coś zaplanować..?
        </div>
      </div>
    </div>
  );
};

export default EmptyTasksList;
