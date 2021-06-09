import React from "react";
import "./style.scss";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PersonIcon from '@material-ui/icons/Person';

const BottomNavigation = () => {
  return (
    <div class="navbar">
      <a href="#home" class="active">
	  <HomeRoundedIcon />
      </a>
      <a href=""><QueryBuilderOutlinedIcon /></a>
      <a href=""><DateRangeIcon /></a>
      <a href=""><PersonIcon /></a>
    </div>
  );
};

export default BottomNavigation;
