import "./ListItem.css";
import Button from "./Button";

const ListItem = ({ id, name, email, onDelete }) => {
  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="ListItem">
      <span className="name">{name.trim()}</span>
      <span className="email">{email.replace(" ", "")}</span>
      <Button type={"remove"} onClick={onClickDeleteButton} />
    </div>
  );
};

export default ListItem;
