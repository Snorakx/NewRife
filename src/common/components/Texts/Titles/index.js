import React from "react";
import './style.scss';

const Title =(props)=> {
  
    return (
    <div className="text-title" onClick={props.handleClick}>{props.children}</div> 
    );
  }


export default Title;