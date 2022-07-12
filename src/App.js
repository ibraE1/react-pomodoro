import { useState } from "react";
import Options from "./components/Options";
import Timer from "./components/Timer";

function App() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);

  return (
    <div className="App">
      <Timer
        minutes={minutes}
        setMinutes={setMinutes}
        seconds={seconds}
        setSeconds={setSeconds}
      ></Timer>
      <Options></Options>
    </div>
  );
}

export default App;
