import React from "react";
import './style.scss';
import Logo from '../../../../common/components/logo/logo-lg/index';
import PrimaryBtn from '../../../../common/components/primary-btn/index';
import {Link} from "react-router-dom";
import Astronaut from "../../../../assets/astronaut.png";



const Form = ()=> {

    return (
    <div className="form">
      <Logo />
      <img src={Astronaut} alt="Astronaut" className="astrounat-img" />
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