import { useState } from "react";
import { PlayerSummary } from "../PlayerSummary/PlayerSummary";
import { opponentStats, playerStats } from "../../shared/characters";
import { BattleMenu } from "../BattleMenu/BattleMenu";

export const Battle = () => {
  const [playertHealh, setPlayerHealh] = useState(playerStats.maxHealth);
  const [opponentHealh, setOpponentHealh] = useState(opponentStats.maxHealth);

  return (
    <div className="battle-main">
      <div className="container">
        <div>
          <div className="opponent">
            <div className="summary">
              <PlayerSummary
                health={opponentHealh}
                name={opponentStats.name}
                level={opponentStats.level}
                maxHealth={opponentStats.maxHealth}
              />
            </div>
          </div>
          <div className="user">
            <div className="summary">
              <PlayerSummary
                main
                health={playertHealh}
                name={playerStats.name}
                level={playerStats.level}
                maxHealth={playerStats.maxHealth}
              />
            </div>
          </div>
        </div>
        <div className="hud-child">
          <BattleMenu
            onAttack={() => console.log("attac")}
            onMagic={() => console.log("magic")}
            onHeal={() => console.log("heal")}
          />
        </div>
      </div>
    </div>
  );
};
