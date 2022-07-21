import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Stepper.scss";

const Stepper = ({ name, value, setValue }) => {
  return (
    <div className="Stepper">
      <h1 className="name">{name}</h1>
      <div className="controls">
        <button
          className="operator"
          onClick={() => value > 1 && setValue(value - 1)}
        >
          <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
        </button>
        <input
          className="counter"
          type="number"
          value={value}
          onChange={(e) =>
            setValue(Math.min(Math.max(parseInt(e.target.value), 1), 60))
          }
        />
        <button
          className="operator"
          onClick={() => value < 60 && setValue(value + 1)}
        >
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Stepper;
