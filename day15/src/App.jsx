import { useReducer } from "react";
import "./App.css";
import Add from "./layouts/Add";
import List from "./layouts/List";

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  const [list, dispatch] = useReducer(reducer, []);

  const onCreate = (contact) => {
    dispatch({
      type: "CREATE",
      data: {
        id: Date.now(),
        name: contact.name,
        email: contact.email,
      },
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  };

  return (
    <>
      <h1>Contact List ☎️</h1>
      <Add onCreate={onCreate} />
      <List list={list} onDelete={onDelete} />
    </>
  );
}

export default App;
