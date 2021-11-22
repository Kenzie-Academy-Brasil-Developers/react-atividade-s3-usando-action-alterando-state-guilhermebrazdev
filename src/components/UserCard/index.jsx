import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../store/modules/user/action";

import "./style.css";

const UserCard = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [newName, setNewName] = useState("");

  const handleClick = () => {
    dispatch(changeName(newName));
    setNewName("");
  };

  return (
    <div>
      <h2>User name: {user.name}</h2>
      <input
        type="text"
        value={newName}
        onChange={(evt) => setNewName(evt.target.value)}
      />
      <button onClick={handleClick}>Change</button>
    </div>
  );
};

export default UserCard;
