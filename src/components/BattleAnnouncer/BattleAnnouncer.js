import { useTypedMessage } from "../../hooks/useTypedMessage";

export const BattleAnnouncer = ({ message }) => {
  const typedMessage = useTypedMessage(message);

  return (
    <div className="battle-announcer-main">
      <div className="message">{typedMessage}</div>;
    </div>
  );
};
