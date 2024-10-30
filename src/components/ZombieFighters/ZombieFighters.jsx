import ZombieFightersStats from "./ZombieFightersStats/ZomieFightersStats.jsx";

const ZombieFighters = ({ character, idx, team, money }) => {
  console.log(money);
  const handleAddCharacter = (character) => {
    character.price > money ? console.log("Greater") : console.log("Less Than");
  };
  return (
    <>
      <li>
        <h2>Name: {character.name}</h2>
        <img src={character.img} alt={character.img} />
        <ZombieFightersStats key={idx} character={character} />
        <button onClick={handleAddCharacter}>Add</button>
      </li>
    </>
  );
};

export default ZombieFighters;
