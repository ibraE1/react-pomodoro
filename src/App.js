import { useState } from "react";
import Timer from "./components/Timer";
import "./App.scss";

function App() {
  const [workTime, setWorkTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);

  return (
    <div className="App">
      <Timer workTime={workTime} breakTime={breakTime}></Timer>
    </div>
  );
}

export default App;
