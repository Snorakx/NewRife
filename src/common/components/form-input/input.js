import React  from "react";
import './style.scss';

const Logo =(props)=> {
  
    return (
        <div class="form">
        <input type="text" id="email" class="form__input" autocomplete="off" placeholder=" " />
        <label for="email" class="form__label">{props.children}</label>
      </div>
    );
  }


export default Logo;