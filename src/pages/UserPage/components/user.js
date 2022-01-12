import React from "react";
import "./user.scss";
import UserCardStats from "./user-card-stats";
import UserAccountSettings from "./user-account-settings";
import UserAchievement from "./user-achievement";
import UserAward from "./user-award";
import UserChartOfHours from "./user-chart-of-hours";
import UserLevel from "./user-level";

const UserComponent = () => {
  return (
    <div className="user-container">
      <div className="user-card-left">
        <UserCardStats />
        <UserAccountSettings />
      </div>
      <div className="user-card-right">
        <div className="user-features">
          <div className="user-card-lvl">
            <UserLevel />
          </div>
          <div className="user-card-badges">
            <UserAchievement />
            <UserAward />
          </div>
        </div>
        <div className="user-chart">
          <UserChartOfHours />
        </div>
      </div>
    </div>
  );
};

export default UserComponent;
