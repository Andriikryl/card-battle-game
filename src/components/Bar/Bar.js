export const Bar = ({ label, value, maxValue }) => {
  return (
    <div className="bar-main">
      <div className="bar-label">{label}</div>
      <div className="bar-max">
        <div
          className="bar-value"
          style={{ width: `${(value / maxValue) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};
