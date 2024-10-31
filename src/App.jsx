import { useState } from "react";
import ZombieFighters from "./components/ZombieFighters/ZombieFighters.jsx";
import ZombieFightersEdited from "./components/ZombieFighterEdited/ZombieFighterEdit.jsx";
import "./App.css";

const App = () => {
  // getter
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
  // setter
  const [zombieFightersList, setZombieFightersList] = useState([
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://via.placeholder.com/150/92c952",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/150/771796",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://via.placeholder.com/150/24f355",
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/d32776",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://via.placeholder.com/150/1ee8a4",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://via.placeholder.com/150/66b7d2",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://via.placeholder.com/150/56acb2",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://via.placeholder.com/150/8985dc",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://via.placeholder.com/150/392537",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/602b9e",
    },
  ]);

  const handleTotalStrength = (character) => {
    // The parameter is just a placeholder here
    setTotalStrength(character + totalStrength);
  };

  const handleTotalAgility = (character) => {
    setTotalAgility(character + totalAgility);
  };

  const handleAddCharacter = (character) => {
    money < character.price
      ? console.log("Not enough money!")
      : console.log("You've just purchased a character");

    setTeam([...team, character]);
    setMoney(money - character.price);
    // The parameter here hold a value for handleTotalStrength()
    handleTotalStrength(character.strength);
    handleTotalAgility(character.agility);
  };

  return (
    <>
      <header>
        <h1>Zombie Fighters</h1>
      </header>
      <h2>{money}</h2>
      <h2>Team Strength: {totalStrength}</h2>
      <h2>Team Agility: {totalAgility}</h2>
      <main>
        <h3>Team</h3>

        <ul>
          {team.length > 0 ? (
            team.map((character, idx) => (
              <li key={idx}>
                <ZombieFightersEdited key={idx} character={character} />
                <button onClick={() => handleRemoveCharacter(character)}>
                  Remove
                </button>
              </li>
            ))
          ) : (
            <p>Pick some team members!</p>
          )}
        </ul>
        <ul>
          {zombieFightersList.map((character, idx) => (
            <li key={idx}>
              <ZombieFighters key={idx} character={character} />

              <button onClick={() => handleAddCharacter(character)}>Add</button>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default App;
