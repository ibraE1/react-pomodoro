import "./ControlButton.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faArrowRotateRight,
} from "@fortawesome/free-solid-svg-icons";

const ControlButton = ({ text, action }) => {
  return (
    <button className="ControlButton" onClick={action}>
      {text === "start" ? (
        <FontAwesomeIcon icon={faPlay} />
      ) : text === "pause" ? (
        <FontAwesomeIcon icon={faPause} />
      ) : (
        <FontAwesomeIcon icon={faArrowRotateRight} />
      )}
    </button>
  );
};

export default ControlButton;
