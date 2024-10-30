const GameInformation = ({ information }) => {
  return (
    <>
      <section>
        <h2>Character Name: {information.name}</h2>
        <p>
          Price: {information.price}{" "}
          <span> Strength: {information.strength}</span>
          <span> Agility: {information.agility}</span>{" "}
        </p>
        <img src={information.img} alt={information.img} />
      </section>
    </>
  );
};

export default GameInformation;
