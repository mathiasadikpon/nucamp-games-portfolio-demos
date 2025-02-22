const GameCard = ({ game }) => {
  return (
    <div className="bg-ligth border p-4 m-2">
      <h4>{game.name}</h4> <p>{game.rating}</p> <p>{game.category}</p>{" "}
    </div>
  );
};

export default GameCard;
