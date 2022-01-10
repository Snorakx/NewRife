import React from "react";
import './style.scss';

const SecondaryBtn =(props)=> {
  
    return (
    <div className="secondary-btn" onClick={props.handleClick}>{props.children}</div> 
    );
  }


export default SecondaryBtn;