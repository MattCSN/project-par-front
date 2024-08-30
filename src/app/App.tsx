import { useState } from "react";
import { useTranslation } from "react-i18next";

import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";

import "./App.css";

function App() {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1>PROJECT PAR</h1>
      <div className="card">
        <button
          onClick={() => {
            setCount(() => count + 1);
          }}
        >
          {`${t("button.counter")} ${count.toString()}`}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
