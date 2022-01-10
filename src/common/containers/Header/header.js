import React from "react";
import "./header.scss";
import Logo from "../../components/logo/logo-sm";
import avatar from "../../../assets/profile-face.jpg";



const Header = () => {
  return (
    <div className="header">
        <div className="sidebar_btn">
          <Logo />
        </div>
      <a href="#" className="avatar_btn">
        <img
          src={avatar}
          className="profile_image"
          alt="logo-rife"
        />
      </a>
    </div>
  );
};

export default Header;
