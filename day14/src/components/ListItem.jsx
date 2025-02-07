import Input from "./Input";

function ListItem({ id, text, isDone, date, onDelete, onUpdate }) {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <Input type={"checkbox"} isDone={isDone} onUpdate={onChangeCheckbox} />
      <p style={{ flex: "1" }}>{text}</p>
      <p>{date}</p>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
}

export default ListItem;
