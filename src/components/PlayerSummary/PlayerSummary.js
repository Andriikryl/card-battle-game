import { Bar } from "../Bar/Bar";

const red = "#821200";
const blue = "#1953cb";

export const PlayerSummary = ({
  main = false,
  name,
  level,
  health,
  maxHealth,
}) => {
  return (
    <div
      className="player-sum-box"
      style={{ backgroundColor: main ? red : blue }}
    >
      <div className="info">
        <h2 className="info-name">{name}</h2>
        <p className="info-level">Lvl: {level}</p>
      </div>
      <div className="health">
        <Bar label="HP" value={health} maxValue={maxHealth} />
      </div>
    </div>
  );
};
