import { useState } from "react";
import "./List.css";
import TodoItem from "./TodoItem";

const List = ({ todos }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const fileredTodos = getFilteredData();

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        type="text"
        placeholder="검색어를 입력하세요."
      />
      {fileredTodos.map((todo) => {
        return <TodoItem key={todo.id} {...todo} />;
      })}
    </div>
  );
};

export default List;
