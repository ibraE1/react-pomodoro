import { useEffect, useRef, useState } from "react";
import ControlButton from "./ControlButton";
import "./Timer.scss";
import sound from "../assets/alert.wav";

const Timer = ({ workTime, breakTime, longBreakTime }) => {
  const [minutes, setMinutes] = useState(workTime);
  const [seconds, setSeconds] = useState(0);
  const [session, setSession] = useState("work");
  const [paused, setPaused] = useState(true);
  const [sessionCounter, setSessionCounter] = useState(1);
  const notificationPlayer = useRef(null);

  useEffect(() => {
    if (!paused) {
      const interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            if (session === "work") {
              if (sessionCounter === 4) {
                setSessionCounter(1);
                setMinutes(longBreakTime);
                setSession("long break");
              } else {
                setSessionCounter(sessionCounter + 1);
                setMinutes(breakTime);
                setSession("break");
              }
            } else {
              setMinutes(workTime);
              setSession("work");
            }
            notificationPlayer.current.play();
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
    minutes,
    paused,
    seconds,
    setMinutes,
    setSeconds,
    breakTime,
    workTime,
    sessionCounter,
    longBreakTime,
    session,
  ]);

  return (
    <div className="Timer">
      <h1 className="countdown">
        {minutes === 0 ? "00" : minutes < 10 ? "0" + minutes : minutes}:
        {seconds === 0 ? "00" : seconds < 10 ? "0" + seconds : seconds}
      </h1>
      <h2 className="status">{sessionCounter}/4</h2>
      <h2 className="status">{paused ? "paused" : session}</h2>
      <div className="controls">
        <ControlButton
          text={paused ? "start" : "pause"}
          action={() => setPaused(!paused)}
        ></ControlButton>
        <ControlButton
          text="reset"
          action={() => {
            setSession("work");
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
