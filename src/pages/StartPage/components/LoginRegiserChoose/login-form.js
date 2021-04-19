import React from "react";
import './style.scss';
import Logo from '../../../../common/components/logo';
import PrimaryBtn from '../../../../common/components/primary-btn/index';
import SecondaryBtn from '../../../../common/components/secondary-btn/index';
import {Link} from "react-router-dom"



const Form = ()=> {

    return (
    <div className="form">
      <Logo />
      <Link to="/home">
      <PrimaryBtn>Zaloguj</PrimaryBtn>
      </Link>
      <Link to="/register">
      <PrimaryBtn>Zarejestruj</PrimaryBtn>
      </Link>
    </div> 
    );
  }


export default Form;