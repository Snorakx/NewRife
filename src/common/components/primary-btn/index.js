import React from "react";
import './style.scss';

const PrimaryBtn =(props)=> {
  
    return (
    <div class="primary-btn" onClick={props.handleClick}>{props.children}</div> 
    );
  }


export default PrimaryBtn;