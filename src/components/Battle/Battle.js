import { useState } from "react";
import { PlayerSummary } from "../PlayerSummary/PlayerSummary";
import { opponentStats, playerStats } from "../../shared/characters";
import { BattleMenu } from "../BattleMenu/BattleMenu";
import { BattleAnnouncer } from "../BattleAnnouncer/BattleAnnouncer";

export const Battle = () => {
  const [playertHealh, setPlayerHealh] = useState(playerStats.maxHealth);
  const [opponentHealh, setOpponentHealh] = useState(opponentStats.maxHealth);

  const [announcerMessage, setAnnouncerMessage] = useState("");

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

          <div className="characters">
            <div className="gameHeader">
              {playerStats.name} vs {opponentStats.name}
            </div>
            <div className="gameImages">
              <div className="playerSprite">
                <img
                  src={playerStats.img}
                  alt={playerStats.name}
                  className=""
                />
              </div>

              <div className="opponentSprite">
                <img
                  src={opponentStats.img}
                  alt={opponentStats.name}
                  className=""
                />
              </div>
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
            <div className="hud">
              <div className="hudChild">
                <BattleAnnouncer
                  message={
                    announcerMessage || `What will ${playerStats.name} do?`
                  }
                />
              </div>
              <div className="hudChild">
                <BattleMenu
                  onAttack={() => console.log("attac")}
                  onMagic={() => console.log("magic")}
                  onHeal={() => console.log("heal")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
