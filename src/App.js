import { useState } from "react";
import Timer from "./components/Timer";
import "./App.scss";
import Options from "./components/Options";

function App() {
  const [workTime, setWorkTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);

  return (
    <div className="App">
      <h1 className="title">Pomodoro</h1>
      <Options></Options>
    </div>
  );
}

export default App;
