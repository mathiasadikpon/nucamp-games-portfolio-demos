const gamesList = [
  {
    id: 0,
    name: "Scythe",
    rating: null,
    category: "Fun",
  },

  {
    id: 1,
    name: "Machi Koro",
    rating: null,
    category: "Deck Building",
  },
  {
    id: 2,
    name: "Galaxy Trucker",
    rating: null,
    category: "Fun",
  },
];
function App() {
  return (
    <div>
      <h1>My Board Games</h1>
      {gamesList.map((game) => {
        return (
          <div>
            <h4>{game.name}</h4> <p>{game.rating}</p> <p>{game.category}</p>{" "}
          </div>
        );
      })}
    </div>
  );
}

export default App;
