import { useState } from "react";
import "./App.css";
import { StartMenu } from "./components/StartMenu/StartMenu";
import { Battle, BattleMenu } from "./components/Battle/Battle";

function App() {
  const [mode, setMode] = useState("start");
  return (
    <div className="App">
      {mode === "start" && <StartMenu onStartClick={() => setMode("battle")} />}
      {mode === "battle" && <Battle />}
      {mode === "gameOver" && <>Game over</>}
    </div>
  );
}

export default App;
