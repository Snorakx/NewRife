import React from "react";
import './style.scss';

const CustomLink =(props)=> {
  
    return (
    <div className="custom-link" onClick={props.handleClick}>{props.children}</div> 
    );
  }


export default CustomLink;