import { useEffect, useState } from "react";
import ControlButton from "./ControlButton";

const Timer = ({ minutes, setMinutes, seconds, setSeconds }) => {
  const [breakTime, setBreakTime] = useState(false);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    if (!paused) {
      const interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            if (breakTime) {
              setBreakTime(false);
              setMinutes(5);
            } else {
              setBreakTime(true);
              setMinutes(25);
            }
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [breakTime, minutes, paused, seconds, setMinutes, setSeconds]);

  return (
    <div className="Timer">
      <h1 id="status">{paused ? "paused" : breakTime ? "break" : "work"}</h1>
      <div id="countdown">
        <p id="minutes">{minutes}</p>
        <p id="colon">:</p>
        <p id="seconds">{seconds}</p>
      </div>
      <div id="controls">
        <ControlButton
          text={paused ? "start" : "pause"}
          action={() => setPaused(!paused)}
        ></ControlButton>
        <ControlButton
          text="reset"
          action={() => {
            setBreakTime(false);
            setPaused(true);
            setMinutes(25);
            setSeconds(0);
          }}
        ></ControlButton>
      </div>
    </div>
  );
};

export default Timer;
