const ControlButton = ({ text, action }) => {
  return (
    <button className="ControlButton" onClick={action}>
      {text}
    </button>
  );
};

export default ControlButton;
