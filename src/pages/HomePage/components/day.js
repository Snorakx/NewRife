import React, { useEffect } from "react";
import "./style.scss";
import Title from "../../../common/components/Texts/Titles/index";
import { useSelector } from "react-redux";

const Day = ({ dayID, handleClick, ...props }) => {
  useEffect(() => {
    getProgress();
  }, []);

  const doneTaskState = "Done";

  const tasks = useSelector((state) => state.tasks.tasksList);

  const tasksOnlyForThisDay = tasks.filter(
    (task) => task.dayID === dayID.toString()
  );

  const doneTasks = tasksOnlyForThisDay.filter(
    (task) => task.state === doneTaskState
  );

  const getProgress = () => {
    let percentsDoneTasks;
    if (tasksOnlyForThisDay.length === 0) {
      percentsDoneTasks = 0;
    } else {
      percentsDoneTasks = (doneTasks.length / tasksOnlyForThisDay.length) * 100;
    }
    return percentsDoneTasks;
  };

  return (
    <div onClick={handleClick} className="day-box">
      <div className="container">
        <Title>
          {props.children}
          <span className="progress-points">
            {doneTasks.length}/{tasksOnlyForThisDay.length}
          </span>
        </Title>
        {tasksOnlyForThisDay.length === 0 ? (
          <div className="text">Wejdź i zaplanuj swój dzień</div>
        ) : (
          <div className="progress progress-striped">
            <div
              className="progress-bar"
              style={{ width: getProgress() + "%" }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Day;
