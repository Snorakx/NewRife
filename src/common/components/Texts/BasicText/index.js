import React from "react";
import './style.scss';

const BasicText =(props)=> {
  
    return (
    <div class="text" onClick={props.handleClick}>{props.children}</div> 
    );
  }


export default BasicText;