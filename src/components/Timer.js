import { useEffect, useRef, useState } from "react";
import ControlButton from "./ControlButton";
import "./Timer.scss";
import sound from "../assets/alert.wav";

const Timer = ({ workTime, breakTime }) => {
  const [minutes, setMinutes] = useState(workTime);
  const [seconds, setSeconds] = useState(0);
  const [work, setWork] = useState(true);
  const [paused, setPaused] = useState(true);
  const notificationPlayer = useRef(null);

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
            notificationPlayer.current.play();
            setWork(!work);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);

      document.title =
        (minutes === 0 ? "00" : minutes < 10 ? "0" + minutes : minutes) +
        ":" +
        (seconds === 0 ? "00" : seconds < 10 ? "0" + seconds : seconds);

      return () => clearInterval(interval);
    } else {
      document.title = "Pomodoro Paused";
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
        {minutes === 0 ? "00" : minutes < 10 ? "0" + minutes : minutes}:
        {seconds === 0 ? "00" : seconds < 10 ? "0" + seconds : seconds}
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
            document.title = "Pomodoro";
          }}
        ></ControlButton>
      </div>
      <audio ref={notificationPlayer} src={sound}></audio>
    </div>
  );
};

export default Timer;
