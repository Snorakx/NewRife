import React from "react";
import "./style.scss";
import Day from "../../HomePage/components/day";
import { useHistory } from "react-router-dom";

const DayContainer = (props) => {
  let daysList = [
    { name: "Poniedziałek", ID: 1 },
    { name: "Wtorek", ID: 2 },
    { name: "Środa", ID: 3 },
    { name: "Czwartek", ID: 4 },
    { name: "Piątek", ID: 5 },
    { name: "Sobota", ID: 6 },
    { name: "Niedziela", ID: 7 },
  ];
  const history = useHistory();
  const openTasksForSimpleDay = (dayID) => {
    history.push({
      pathname: "/tasks",
      state: { id: dayID },
    });
  };

  return (
    <div className="day-container">
      {daysList.map((item) => {
        return (
          <Day
            handleClick={() => openTasksForSimpleDay(item.ID)}
            dayID={item.ID}
            key={item.ID}
          >
            {item.name}
          </Day>
        );
      })}
    </div>
  );
};

export default DayContainer;
