import clsx from "clsx";
import css from "./FriendList.module.css";
import FriendListItem from "./FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <div>
      {friends.map((friend) => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </div>
  );
};

export default FriendList;
