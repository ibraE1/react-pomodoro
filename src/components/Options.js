import Stepper from "./Stepper";

const Options = () => {
  return (
    <div className="Options">
      <Stepper name="work" value={25}></Stepper>
      <Stepper name="break" value={5}></Stepper>
    </div>
  );
};

export default Options;
