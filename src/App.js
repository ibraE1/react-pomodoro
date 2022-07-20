import { useState } from "react";
import Timer from "./components/Timer";
import "./App.scss";
import Options from "./components/Options";

function App() {
  const [workTime, setWorkTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [timerVisibility, setTimerVisibility] = useState(false);

  return (
    <div className="App">
      <h1 className="title">Pomodoro</h1>
      {timerVisibility ? (
        <Timer {...{ workTime, breakTime }} />
      ) : (
        <Options
          {...{
            workTime,
            setWorkTime,
            breakTime,
            setBreakTime,
            setTimerVisibility,
          }}
        ></Options>
      )}
    </div>
  );
}

export default App;
