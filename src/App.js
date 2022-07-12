import { useState } from "react";
import Options from "./components/Options";
import Timer from "./components/Timer";

function App() {
  const [workTime, setWorkTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);

  return (
    <div className="App">
      <Timer workTime={workTime} breakTime={breakTime}></Timer>
      <Options></Options>
    </div>
  );
}

export default App;
