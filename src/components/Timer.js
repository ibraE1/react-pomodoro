import { useEffect, useState } from "react";
import ControlButton from "./ControlButton";
import "./Timer.scss";

const Timer = ({ workTime, breakTime }) => {
  const [minutes, setMinutes] = useState(workTime);
  const [seconds, setSeconds] = useState(0);
  const [work, setWork] = useState(true);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    if (!paused) {
      const interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            if (work) {
              setMinutes(breakTime);
            } else {
              setMinutes(workTime);
            }
            setWork(!work);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [
    work,
    minutes,
    paused,
    seconds,
    setMinutes,
    setSeconds,
    breakTime,
    workTime,
  ]);

  return (
    <div className="Timer">
      <h1 className="countdown">
        {minutes === 0 ? "00" : minutes}:{seconds === 0 ? "00" : seconds}
      </h1>
      <h2 className="status">{paused ? "paused" : work ? "work" : "break"}</h2>
      <div className="controls">
        <ControlButton
          text={paused ? "start" : "pause"}
          action={() => setPaused(!paused)}
        ></ControlButton>
        <ControlButton
          text="reset"
          action={() => {
            setWork(true);
            setPaused(true);
            setMinutes(workTime);
            setSeconds(0);
          }}
        ></ControlButton>
      </div>
    </div>
  );
};

export default Timer;
