import ZombieFightersStats from "./ZombieFightersStats/ZomieFightersStats.jsx";

const ZombieFighters = ({ character, idx }) => {
  return (
    <>
      <h2>Name: {character.name}</h2>
      <img src={character.img} alt={character.img} />
      <ZombieFightersStats key={idx} character={character} />
    </>
  );
};

export default ZombieFighters;
