import { useState } from "react";
import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";

function App() {
  const [count, setCount] = useState(0);
  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <main className="app">
      <h1>Simple Counter</h1>
      <Viewer count={count} />
      <Controller onClickButton={onClickButton} />
    </main>
  );
}

export default App;
