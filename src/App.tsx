import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import { ICheckIn, getCheckIns } from "./data/checkIn";

function App() {
  const [count, setCount] = useState(0);
  const [checkIns, setCheckIns] = useState<ICheckIn[]>([]);

  function handleFetchCheckIns() {
    getCheckIns()
      .then(res => setCheckIns(res))
      .catch(err => console.error(err.message));
  }

  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p>Click on the Vite and React logos to learn more</p>
      <button className="mt-4 rounded bg-sky-500 p-2" onClick={handleFetchCheckIns}>
        Fetch Checkins
      </button>
      {checkIns.length > 0 && (
        <div className="mt-4">
          <code>{JSON.stringify(checkIns, null, 2)}</code>
        </div>
      )}
    </div>
  );
}

export default App;
