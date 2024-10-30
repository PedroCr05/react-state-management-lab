const ZombieFightersStats = ({ character }) => {
  return (
    <>
      <h3>Price: {character.price}</h3>
      <h3>Strength: {character.strength}</h3>
      <h3>Agility: {character.agility}</h3>
    </>
  );
};

export default ZombieFightersStats;
