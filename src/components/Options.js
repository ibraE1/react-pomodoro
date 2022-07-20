import Stepper from "./Stepper";
import "./Options.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Options = ({
  workTime,
  setWorkTime,
  breakTime,
  setBreakTime,
  setTimerVisibility,
}) => {
  return (
    <div className="Options">
      <Stepper name="work" value={workTime} setValue={setWorkTime}></Stepper>
      <Stepper name="break" value={breakTime} setValue={setBreakTime}></Stepper>
      <div className="container">
        <button
          className="continue"
          onClick={() => {
            setTimerVisibility(true);
          }}
        >
          <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Options;
