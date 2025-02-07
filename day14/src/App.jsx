import "./App.css";
import Header from "./layouts/Header";
import Editor from "./layouts/Editor";
import List from "./layouts/List";
import { useRef, useState } from "react";

function App() {
  const addInput = useRef("");
  const [todos, setTodos] = useState([]);

  const onCreate = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      isDone: false,
      date: new Date().toLocaleDateString(),
    };

    setTodos([...todos, newTodo]);
  };

  const onUpdate = (targetId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div>
      <Header />
      <Editor ref={addInput} onCreate={onCreate} />
      <List todos={todos} onDelete={onDelete} onUpdate={onUpdate} />
    </div>
  );
}

export default App;
