import clsx from "clsx";
import css from "./FriendListItem.module.css";
import FriendListItem from "./components/FriendListItem/FriendListItem";

const FriendListItem = ({}) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p>{isOnline}</p>
    </div>
  );
};

export default FriendListItem;
