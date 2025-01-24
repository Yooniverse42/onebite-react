import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  const name = "이정환";
  const isMember = true;

  return (
    <>
      <Welcome name={name} isMember={isMember} />
    </>
  );
}

export default App;
