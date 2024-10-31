import ZombieFightersStatsEdited from "./ZombieFighterStatsEdited/ZombieFighterStatsEdited";

const ZombieFightersEdited = ({ character, idx }) => {
  console.log(character);
  return (
    <>
      <h2>Name: {character.name}</h2>
      <img src={character.img} alt={character.img} />
      <ZombieFightersStatsEdited key={idx} character={character} />
    </>
  );
};

export default ZombieFightersEdited;
