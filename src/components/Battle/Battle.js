import { PlayerSummary } from "../PlayerSummary/PlayerSummary";

export const Battle = () => {
  return (
    <div className="battle-main">
      <div className="container">
        <div className="opponent">
          <div className="summary">
            <PlayerSummary main={false} />
          </div>
        </div>
        <div className="user">
          <div className="summary">
            <PlayerSummary main={true} />
          </div>
        </div>
      </div>
    </div>
  );
};
