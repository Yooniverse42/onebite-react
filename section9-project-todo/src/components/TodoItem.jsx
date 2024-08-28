import "./TodoItem.css";

const TodoItem = () => {
  return (
    <div className="TodoItem">
      <input type="checkbox" />
      <div className="content">내용 들어가요</div>
      <div className="date">날짜 들어가요</div>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
