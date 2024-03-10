import clsx from "clsx";
import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.profileInfo}>
        <img className={css.profileAvatar} src={image} alt="User avatar" />
        <p className={css.profileName}>{name}</p>
        <p className={css.profileTag}>@{tag}</p>
        <p className={css.profileLocation}>{location}</p>
      </div>

      <ul className={css.profileStats}>
        <li className={css.profileStat}>
          <span>{stats.followers}</span>
          <span>1000</span>
        </li>
        <li className={css.profileStat}>
          <span>{stats.views}</span>
          <span>2000</span>
        </li>
        <li className={css.profileStat}>
          <span>{stats.likes}</span>
          <span>3000</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
