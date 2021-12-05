import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./style.scss";

export const GroupedSelect = ({ handleClick, taskID }) => {
  const [dropDown, setDropDown] = useState("");
  const handleDropDown = () => {
    if (dropDown === "active") {
      setDropDown("");
    } else {
      setDropDown("active");
    }
  };
  return (
    <div onClick={() => handleDropDown()} className="drop-down">
      <div className="drop-down__icon">
        <KeyboardArrowDownIcon />
      </div>
      <div id={taskID.slice(0,5)} className={"drop-down__container " + dropDown}>
        <div className="drop-down__options-box">
          <button className="drop-down__options-box__button">Edytuj</button>
        </div>
        <div className="drop-down__options-box">
          <div className="drop-down__options-box__header">Przenieś</div>
          <button className="drop-down__options-box__button">
            Poniedziałek
          </button>
          <button className="drop-down__options-box__button">Wtorek</button>
          <button className="drop-down__options-box__button">Środa</button>
          <button className="drop-down__options-box__button">Czwartek</button>
          <button className="drop-down__options-box__button">Piątek</button>
          <button className="drop-down__options-box__button">Sobota</button>
          <button className="drop-down__options-box__button">Niedziela</button>
          <div className="drop-down__options-box__header"></div>
        </div>
        <div className="drop-down__options-box">
          <button
            onClick={() => handleClick(taskID)}
            className="drop-down__options-box__button"
          >
            Usuń
          </button>
        </div>
      </div>
    </div>
  );
};
