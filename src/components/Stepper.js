import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Stepper.scss";

const Stepper = ({ name, value }) => {
  return (
    <div className="Stepper">
      <h1 className="name">{name}</h1>
      <div className="controls">
        <button className="operator">
          <FontAwesomeIcon icon={faMinus} inverse></FontAwesomeIcon>
        </button>
        <input className="counter" type="number" value={value} />
        <button className="operator">
          <FontAwesomeIcon icon={faPlus} inverse></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Stepper;
