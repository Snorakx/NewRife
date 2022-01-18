import React from "react";
import "./user-achievement.scss";
import achievement from "../../../assets/break.png";

const UserAchievement = () => {
  return (
    <div className="user-card-achievement">
      <div className="card-header">
        <div className="recently-unlocked">Ostatnio odblokowano</div>
        <div className="see-all">Zobacz wszytskie</div>
      </div>
      <div className="achievement-box">
        <img
          src={achievement}
          className="achievement_image"
          alt="your_last_achievement"
        />
        <div className="achievement-text">
          Byłeś 3 razy na przerwie w ciągu dnia
        </div>
      </div>
    </div>
  );
};

export default UserAchievement;
