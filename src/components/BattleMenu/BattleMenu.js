export const BattleMenu = ({ onAttack, onMagic, onHeal }) => {
  return (
    <div className="battle-menu-main">
      <div onClick={onAttack} className="battle-menu-option">
        Attack
      </div>
      <div onClick={onMagic} className="battle-menu-option">
        Magic
      </div>
      <div onClick={onHeal} className="battle-menu-option">
        Heal
      </div>
    </div>
  );
};
