import React from "react";
import "./style.scss";
import Logo from "../../components/logo";

const Dashboard = () => {
  return (
    <div>
      <input type="checkbox" id="check" />
      <header>
        <label for="check">
          <div id="sidebar_btn">
            <Logo />
            <i class="fas fa-bars"></i>
          </div>
        </label>
        <div class="right_area">
          <a href="#" class="avatar_btn">
            <div class="profile-div">
              <img
                src="https://picsum.photos/id/166/200/200"
                class="profile_image"
                alt=""
              />
            </div>
          </a>
        </div>
      </header>
      <div class="sidebar">
        <a href="#">
          <i class="fas fa-desktop"></i>
          <span>Dni tygodnia</span>
        </a>
        <a href="#">
          <i class="fas fa-cogs"></i>
          <span>Zegar</span>
        </a>
        <a href="#">
          <i class="fas fa-table"></i>
          <span>Kalendarz</span>
        </a>
        <a href="#">
          <i class="fas fa-th"></i>
          <span>Twoje konto</span>
        </a>
      </div>
      <div class="content"></div>
    </div>
  );
};

export default Dashboard;
