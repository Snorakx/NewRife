import React from "react";
import "./style.scss";
import Title from "../../../common/components/Texts/Titles/index";
import store from "../../../app/store"

const Day = (props) => {
  let randomNumber = Math.floor(Math.random() * 100);
  let tasks = store.getState().tasks.tasksList;
  console.log(tasks);
  return (
    <div onClick={props.handleClick} className="day-box">
      <div className="container">
        <Title>{props.children}</Title>
        <div className="progress progress-striped">
          <div
            className="progress-bar"
            style={{ width: randomNumber + "%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Day;
