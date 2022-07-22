import { useState } from "react";
import Timer from "./components/Timer";
import Options from "./components/Options";
import styles from "./App.module.scss";

function App() {
  const [workTime, setWorkTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [longBreakTime, setLongBreakTime] = useState(10);
  const [timerVisibility, setTimerVisibility] = useState(false);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Pomodoro</h1>
      {timerVisibility ? (
        <Timer {...{ workTime, breakTime, longBreakTime }} />
      ) : (
        <Options
          {...{
            workTime,
            setWorkTime,
            breakTime,
            setBreakTime,
            longBreakTime,
            setLongBreakTime,
            setTimerVisibility,
          }}
        ></Options>
      )}
    </div>
  );
}

export default App;
