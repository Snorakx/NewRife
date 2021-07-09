import React from "react";
import "./style.scss";
import Title from "../../../common/components/Texts/Titles/index"


const Day = (props) => {
  let randomNumber = Math.floor(Math.random() * 500);
  return (
    <div onClick={props.handleClick} className="day-box">
        <div className="container">    
      <Title>{props.children}</Title>
        <div className="progress progress-striped">
          <div className="progress-bar" style={{"width":randomNumber}}>
          </div>                       
        </div> 
      </div>
      </div>
  );
};

export default Day;
