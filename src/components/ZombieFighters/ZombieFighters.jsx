import ZombieFightersStats from "./ZombieFightersStats/ZomieFightersStats.jsx";
const ZombieFighters = ({ character }) => {
  return (
    <>
      <li>
        <h2>Name: {character.name}</h2>
        <img src={character.img} alt={character.img} />
        character={character}
      </li>
    </>
  );
};

export default ZombieFighters;
