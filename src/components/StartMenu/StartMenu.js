export const StartMenu = ({ onStartClick }) => {
  return (
    <section className="hero-section">
      <div className="main">
        <div className="container">
          <div className="main-box">
            <button className="startButton" onClick={onStartClick}>
              Start game
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
