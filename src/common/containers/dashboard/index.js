import React from "react";
import "./style.scss";
import Logo from "../../components/logo/logo-sm";
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PersonIcon from '@material-ui/icons/Person';
import ViewWeekIcon from '@material-ui/icons/ViewWeek';
import {Link} from "react-router-dom";
import store from "../../../app/store"


const Dashboard = (props) => {
 
  return(   
    <div>
      <input type="checkbox" id="check" />
      <header>
        <label >
          <div id="sidebar_btn">
            <Logo />
            <i className="fas fa-bars"></i>
          </div>
        </label>
          <a href="#" className="avatar_btn">
              <img
                src="https://i.postimg.cc/3x9PcnkX/avatar.png"
                className="profile_image"
                alt=""
              />
          </a>
      </header>
      <div className="sidebar">
        <a href="#">
          <i>
          <ViewWeekIcon/>
          </i>
          <span>Dni tygodnia</span>
        </a>
        <Link to="/gold-hour">
        <i>
        <QueryBuilderOutlinedIcon />
        </i>
          <span>Zegar</span>
        </Link>
        <a href="/gold-hour">
        <i>
        <DateRangeIcon />
        </i>
          <span>Kalendarz</span>
        </a>
        <a href="#">
        <i>
        <PersonIcon />
        </i>
          <span>Twoje konto</span>
        </a>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default Dashboard;
