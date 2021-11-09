import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./style.scss";
import QueryBuilderOutlinedIcon from "@material-ui/icons/QueryBuilderOutlined";
import DateRangeIcon from "@material-ui/icons/DateRange";
import PersonIcon from "@material-ui/icons/Person";
import ViewWeekIcon from "@material-ui/icons/ViewWeek";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import LogoutIcon from '@mui/icons-material/Logout';
import ChevronRight from "@material-ui/icons/ChevronRight";
import { Link } from "react-router-dom";
import store from "../../../app/store";
import { logoutUser } from "../../../state/user/auth/authAction";
import Header from "../Header/header";

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
      setminWIdth("300px");
    }
  };

  const LogoutUser = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="dashboard-wrapper">
      <Header />
      <div className="flex-row-dashboard-container">
        <div className="sidebar" style={{ flex: flexMenu, minWidth: minWIdth }}>
          <div className="primary-menu-sidebar-bottom">
            {flexMenu === "1" ? (
              <button onClick={() => toggleMenu()}>
                <ChevronLeft className="close-menu-button" />
              </button>
            ) : (
              <button onClick={() => toggleMenu()}>
                <ChevronRight className="close-menu-button" />
              </button>
            )}
          </div>
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
                <LogoutIcon />
              </i>
              {flexMenu === "1" ? <span>Wyloguj się</span> : <></>}
            </a>
          </div>
        </div>
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
};

export default Dashboard;
