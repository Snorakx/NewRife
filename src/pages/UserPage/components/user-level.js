import React from "react";
import "./user-level.scss";
import lvl1 from "../../../assets/leniwiec.png";

const UserLevel = () => {
  return (
    <div className="user-card-level">
      <div className="lvl-image">
        <img src={lvl1} className="lvl_image" alt="lvl_img" />
      </div>
    </div>
  );
};

export default UserLevel;
