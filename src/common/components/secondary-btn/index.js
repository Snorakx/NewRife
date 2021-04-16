import React from "react";
import './style.scss';

const SecondaryBtn =(props)=> {
  
    return (
    <div class="secondary-btn">{props.children}</div> 
    );
  }


export default SecondaryBtn;