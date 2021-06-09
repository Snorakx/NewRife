import React from "react";
import './style.scss';

const Title =(props)=> {
  
    return (
    <div class="text-title" onClick={props.handleClick}>{props.children}</div> 
    );
  }


export default Title;