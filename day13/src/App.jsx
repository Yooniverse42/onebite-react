import { useState } from "react";
import "./App.css";
import CurrencyInput from "./components/CurrencyInput";

function App() {
  const [state, setState] = useState({
    krw: 0,
    usd: 0,
  });

  const Exchange = 1300;

  const onChange = (currency, value) => {
    if (currency === "krw") {
      setState({
        krw: value,
        usd: value / Exchange,
      });
    } else {
      setState({
        krw: value * Exchange,
        usd: value,
      });
    }
  };

  return (
    <>
      <h1>환율 변환기 (KRW-USD)</h1>
      <CurrencyInput currency="krw" value={state.krw} onChange={onChange} />
      <CurrencyInput currency="usd" value={state.usd} onChange={onChange} />
    </>
  );
}

export default App;
