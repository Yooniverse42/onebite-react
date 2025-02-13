import "./ListItem.css";
import Button from "./Button";
import { memo, useContext } from "react";
import { ContactDispatchContext } from "../App";

const ListItem = ({ id, name, email }) => {
  const { onDelete } = useContext(ContactDispatchContext);
  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="ListItem">
      <span className="name">{name.trim()}</span>
      <span className="email">{email.replace(" ", "")}</span>
      <Button.Remove onClick={onClickDeleteButton} />
    </div>
  );
};

export default memo(ListItem);
