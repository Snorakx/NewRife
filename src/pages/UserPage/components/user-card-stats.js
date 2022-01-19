import React from "react";
import "./user-card-stats.scss";
import avatar from "../../../assets/profile-face.jpg";

const UserCardStats = () => {
  return (
    <div className="user-card-stats">
      <div className="profile_image_container">
        <img src={avatar} className="profile_image" alt="your_photo" />
      </div>
      <div className="profile_data">
        <div className="user_stats">
          <div className="user_stats_number">56</div>
          <div className="user_stats_data">Zrobionych zadań</div>
        </div>
        <div className="user_stats">
          <div className="user_stats_number">30</div>
          <div className="user_stats_data">Idealnych godzin</div>
        </div>
        <div className="user_stats">
          <div className="user_stats_number">17</div>
          <div className="user_stats_data">Ciąg dni z rzędu</div>
        </div>
      </div>
    </div>
  );
};

export default UserCardStats;
