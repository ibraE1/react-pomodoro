import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import styles from "./Options.module.scss";
import NumberInput from "./NumberInput";

const Options = ({
  workTime,
  setWorkTime,
  breakTime,
  setBreakTime,
  longBreakTime,
  setLongBreakTime,
  setTimerVisibility,
}) => {
  return (
    <div className={styles.container}>
      <NumberInput
        name="work"
        value={workTime}
        setValue={setWorkTime}
      ></NumberInput>
      <NumberInput
        name="break"
        value={breakTime}
        setValue={setBreakTime}
      ></NumberInput>
      <NumberInput
        name="long break"
        value={longBreakTime}
        setValue={setLongBreakTime}
      ></NumberInput>
      <button
        className={styles.continue}
        onClick={() => setTimerVisibility(true)}
      >
        <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Options;
