import React from "react";
import "./header.scss";
import Logo from "../../components/logo/logo-sm";
import avatar from "../../../assets/profile-face.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const hoursToNextLevel = useSelector((state) => state.hours.hoursToNextLevel);
  const workedHours = useSelector((state) => state.hours.workedHours);

  const getProgress = () => {
    let percentsDoneTasks;
    percentsDoneTasks = (workedHours / hoursToNextLevel) * 100;

    return percentsDoneTasks;
  };

  return (
    <div className="header">
      <div className="sidebar_btn">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <Link to="/user" className="avatar_btn">
        <div class="progress-holder">
          <div className="progress progress-striped">
            <div className="text numbers">
              {workedHours && hoursToNextLevel > 0
                ? workedHours + "/" + hoursToNextLevel + "IZG"
                : "Bonusowa godzinka?"}{" "}
            </div>
            <div
              className="progress-bar"
              style={{ width: getProgress() + "%" }}
            ></div>
          </div>
        </div>
        <img src={avatar} className="profile_image" alt="logo-rife" />
      </Link>
    </div>
  );
};

export default Header;
