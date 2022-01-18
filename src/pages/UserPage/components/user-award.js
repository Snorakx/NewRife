import React from "react";
import "./user-award.scss";

const UserAward = () => {
  return (
    <div className="user-card-award">
      <div className="card-header">
        <div className="recently-unlocked">Następna nagroda</div>
        <div className="see-all">Zobacz wszytskie</div>
      </div>
      <div className="award-text">Matcha Latte</div>
    </div>
  );
};

export default UserAward;
