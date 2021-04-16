import React from "react";
import './style.scss';
import Logo from '../../components/logo/index';
import PrimaryBtn from '../../components/primary-btn/index';
import SecondaryBtn from '../../components/secondary-btn/index';

const Form =()=> {
  
    return (
    <div className="form">
      <Logo />
      <PrimaryBtn>Zaloguj</PrimaryBtn>
      <PrimaryBtn>Zarejestruj</PrimaryBtn>


    </div> 
    );
  }


export default Form;