const GameCard = (props) => {
  return (
    <div>
      <h4>{props.game.name}</h4> <p>{props.game.rating}</p> <p>{props.game.category}</p>{" "}
    </div>
  );
};

export default GameCard;
