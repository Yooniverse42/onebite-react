import { useState } from "react";
import Input from "../components/Input";
import ListItem from "../components/ListItem";

function List({ todos, onDelete, onUpdate }) {
  const [search, setSearch] = useState("");

  const onSearchValue = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search.trim() === "") {
      return todos;
    }

    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData();

  return (
    <div>
      <p>Todo List</p>
      <Input
        value={search}
        onChange={onSearchValue}
        type={"text"}
        placeholder={"검색어를 입력하세요."}
        style={{
          width: "100%",
          height: "40px",
          border: "none",
          borderBottom: "1px solid gray",
          backgroundColor: "transparent",
          padding: "5px 10px",
        }}
      />
      <div className="renderListItem">
        {filteredTodos.map((todo) => {
          return (
            <ListItem
              {...todo}
              key={todo.id}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          );
        })}
      </div>
    </div>
  );
}

export default List;
