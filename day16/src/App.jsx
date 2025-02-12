import { useReducer } from "react";
import "./App.css";
import ContactEditor from "./layouts/ContactEditor";
import ContactList from "./layouts/ContactList";
import { useCallback } from "react";

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

  const onCreate = useCallback((contact) => {
    dispatch({
      type: "CREATE",
      data: {
        id: Date.now(),
        name: contact.name,
        email: contact.email,
      },
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  return (
    <>
      <h1>Contact List ☎️</h1>
      <ContactEditor onCreate={onCreate} />
      <ContactList list={list} onDelete={onDelete} />
    </>
  );
}

export default App;
