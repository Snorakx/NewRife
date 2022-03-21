import React, { useEffect } from "react";
import "./user-card-stats.scss";
import avatar from "../../../assets/profile-face.jpg";
import { useDispatch, useSelector } from "react-redux";
import { countAllDoneTasks } from "../../../state/tasks/tasksAction";

const UserCardStats = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countAllDoneTasks());
  }, [dispatch]);

  const allDoneTasksNumber = useSelector((state) => state.tasks.allDoneTasks);
  const allWorkedHours = useSelector((state) => state.hours.allWorkedHours);

  return (
    <div className="user-card-stats">
      <div className="profile_image_container">
        <img src={avatar} className="profile_image" alt="your_photo" />
      </div>
      <div className="profile_data">
        <div className="user_stats">
          <div className="user_stats_number">{allDoneTasksNumber}</div>
          <div className="user_stats_data">Zrobionych zadań</div>
        </div>
        <div className="user_stats">
          <div className="user_stats_number">{allWorkedHours}</div>
          <div className="user_stats_data">Idealnych godzin</div>
        </div>
        {/* TO DO Backend */}
        {/* <div className="user_stats">
          <div className="user_stats_number">17</div>
          <div className="user_stats_data">Ciąg dni z rzędu</div>
        </div> */}
      </div>
    </div>
  );
};

export default UserCardStats;
