import "./App.css";
import { useReducer, useCallback, createContext, useMemo } from "react";
import ContactEditor from "./layouts/ContactEditor";
import ContactList from "./layouts/ContactList";

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

export const ContactStateContext = createContext();
export const ContactDispatchContext = createContext();

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

  const memoizedDispatches = useMemo(() => ({ onCreate, onDelete }), []);

  return (
    <>
      <h1>Contact List ☎️</h1>
      <ContactStateContext.Provider value={list}>
        <ContactDispatchContext.Provider value={memoizedDispatches}>
          <ContactEditor />
          <ContactList />
        </ContactDispatchContext.Provider>
      </ContactStateContext.Provider>
    </>
  );
}

export default App;
