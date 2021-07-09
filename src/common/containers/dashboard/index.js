import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./style.scss";
import Logo from "../../components/logo/logo-sm";
import QueryBuilderOutlinedIcon from "@material-ui/icons/QueryBuilderOutlined";
import DateRangeIcon from "@material-ui/icons/DateRange";
import PersonIcon from "@material-ui/icons/Person";
import ViewWeekIcon from "@material-ui/icons/ViewWeek";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import { Link } from "react-router-dom";
import store from "../../../app/store";
import { logoutUser } from "../../../state/user/auth/authAction";

const Dashboard = (props) => {
  const [flexMenu, setFlexMenu] = useState("1");
  const [minWIdth, setminWIdth] = useState("200px");

  const dispatch = useDispatch();

  const toggleMenu = () => {
    if (flexMenu === "1") {
      setFlexMenu("0");
      setminWIdth("100px");
    } else {
      setFlexMenu("1");
      setminWIdth("200px");
    }
  };

  const LogoutUser = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="dashboard-wrapper">
      <div>
        <label>
          <div id="sidebar_btn">
            <Logo />
          </div>
        </label>
        <a href="#" className="avatar_btn">
          <img
            src="https://i.postimg.cc/3x9PcnkX/avatar.png"
            className="profile_image"
            alt="logo-rife"
          />
        </a>
      </div>
      <div className="flex-row-dashboard-container">
        <div className="sidebar" style={{ flex: flexMenu, minWidth: minWIdth }}>
          <div className="primary-menu-sidebar">
            <Link to="/home">
              <i>
                <ViewWeekIcon />
              </i>
              {flexMenu === "1" ? <span>Dni tygodnia</span> : <></>}
            </Link>
            <Link to="/gold-hour">
              <i>
                <QueryBuilderOutlinedIcon />
              </i>
              {flexMenu === "1" ? <span>Zegar</span> : <></>}
            </Link>
            <a href="/gold-hour">
              <i>
                <DateRangeIcon />
              </i>
              {flexMenu === "1" ? <span>Kalendarz</span> : <></>}
            </a>
            <a href="#">
              <i>
                <PersonIcon />
              </i>
              {flexMenu === "1" ? <span>Twoje konto</span> : <></>}
            </a>
            <a onClick={LogoutUser} href="/">
              <i>
                <PersonIcon />
              </i>
              {flexMenu === "1" ? <span>Wyloguj się</span> : <></>}
            </a>
          </div>
          <div className="primary-menu-sidebar-bottom">
            {flexMenu === "1" ? (
              <button onClick={() => toggleMenu()}>
                <ChevronLeft className="close-menu-button" /><span>Zwiń menu</span>
              </button>
            ) : (
              <button onClick={() => toggleMenu()}>
                <ChevronRight className="close-menu-button" />
              </button>
            )}
          </div>
        </div>
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
};

export default Dashboard;
