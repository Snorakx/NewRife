import React from "react";
import './style.scss';

const PrimaryBtn =(props)=> {
  
    return (
    <div class="primary-btn">{props.children}</div> 
    );
  }


export default PrimaryBtn;