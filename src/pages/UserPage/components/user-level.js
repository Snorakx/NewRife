import React from "react";
import "./user-level.scss";
import Astronaut from "../../../assets/astronaut.png";
import { useSelector } from "react-redux";

const UserLevel = () => {
  const userLevelNames = [
    "Leniwy student",
    "Czujny leniwiec",
    "Odkrywca",
    "Pracuś",
    "Haker umysłu",
    "Demon progresu",
    "Bandyta czasu",
    "Skupiony gość",
    "Spec produktywności",
    "Pełen ikry",
    "Demon progresu",
    "Mistrz działania",
    "Czempion!",
    "Weteran",
    "Względnie imponujący działacz",
    "Bezwzględnie imponujący działacz",
  ];

  const userLevel = useSelector((state) => state.hours.level);
  const hoursToNextLevel = useSelector((state) => state.hours.hoursToNextLevel);
  const workedHours = useSelector((state) => state.hours.workedHours);

  const getProgress = () => {
    let percentsDoneTasks;
    percentsDoneTasks = (workedHours / hoursToNextLevel) * 100;

    return percentsDoneTasks;
  };

  const formatter = new Intl.DateTimeFormat("pl", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
  /** to do - for now its just add one week to today date :)
   ** Missing backend function with saving date of start new lvl
   */
  const d = new Date();
  d.setDate(d.getDate() + 7);
  const month1 = formatter.format(d);

  return (
    <div className="user-card-level">
      <div className="lvl-container">
        <div className="image">
          <img src={Astronaut} alt="Astronaut" className="astrounat-img" />
        </div>
        <div className="text heading">{userLevelNames[userLevel]}</div>
        <div className="text">Zdobądź {hoursToNextLevel} IZG.</div>
        <div className="text">
          Nastepny level: {userLevelNames[userLevel + 1]}
        </div>
        <div class="progress-holder">
          <div className="progress progress-striped">
            <div
              className="progress-bar"
              style={{ width: getProgress() + "%" }}
            ></div>
          </div>
        </div>
        <div className="text numbers">
          {workedHours}/{hoursToNextLevel} IZG
        </div>
      </div>
    </div>
  );
};

export default UserLevel;
