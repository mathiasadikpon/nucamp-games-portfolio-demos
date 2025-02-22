const GameCard = ({ game }) => {
  return (
    <div>
      <h4>{game.name}</h4> <p>{game.rating}</p> <p>{game.category}</p>{" "}
    </div>
  );
};

export default GameCard;
