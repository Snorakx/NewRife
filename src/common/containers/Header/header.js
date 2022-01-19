import React from "react";
import "./header.scss";
import Logo from "../../components/logo/logo-sm";
import avatar from "../../../assets/profile-face.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="sidebar_btn">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <Link to="/user" className="avatar_btn">
        <img src={avatar} className="profile_image" alt="logo-rife" />
      </Link>
    </div>
  );
};

export default Header;
