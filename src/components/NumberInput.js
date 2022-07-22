import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./NumberInput.module.scss";

const NumberInput = ({ name, value, setValue }) => {
  return (
    <div className={styles.container}>
      <h1>{name}</h1>
      <div className={styles.controls}>
        <button onClick={() => value > 1 && setValue(value - 1)}>
          <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
        </button>
        <input
          type="number"
          value={value}
          onChange={(e) =>
            setValue(Math.min(Math.max(parseInt(e.target.value), 1), 60))
          }
        />
        <button onClick={() => value < 60 && setValue(value + 1)}>
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default NumberInput;
