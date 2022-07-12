const Stepper = ({ name, value }) => {
  return (
    <div className="Stepper">
      <button>^</button>
      <p>{name}</p>
      <input type="text" value={value} />
      <button>v</button>
    </div>
  );
};

export default Stepper;
