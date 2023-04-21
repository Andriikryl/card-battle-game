import { useState } from "react";
import "./App.css";
import { StartMenu } from "./components/StartMenu/StartMenu";

function App() {
  const [mode, setMode] = useState("start");
  return (
    <div className="App">
      {mode === "start" && <StartMenu onStartClick={() => setMode("battle")} />}
      {mode === "battle" && <>battle mode</>}
      {mode === "gameOver" && <>Game over</>}
    </div>
  );
}

export default App;
