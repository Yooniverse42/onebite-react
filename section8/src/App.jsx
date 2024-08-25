import { useEffect, useState, useRef } from "react";
import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  useEffect(() => {
    console.log("mount");
  }, []);
  // [] : 의존성 배열(dependency array, deps)
  // useEffect 미사용 시 => 리액트의 상태변화 함수(setCount)는 비동기로 동작함
  // 그러므로 상태변화 함수가 호출만 될 뿐 완료가 된 것이 아님
  // 그래서 변경된 state값을 바로 사용하여
  // 사이드 이펙트에 해당하는 부가적인 작업을 진행할 땐 useEffect 사용해야 한다.

  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <main className="app">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <Viewer count={count} />
      {count % 2 === 0 ? <Even /> : null}
      <Controller onClickButton={onClickButton} />
    </main>
  );
}

export default App;
