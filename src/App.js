import { useState } from "react";
import GameCard from "./GameCard";

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
  const [categoryFilter, setCategoryFilter] = useState("Fun");
  let filteredGames;
  if (categoryFilter === "All") {
    filteredGames = gamesList;
  } else {
    filteredGames = gamesList.filter(
      (game) => game.category === categoryFilter
    );
  }
  return (
    <div>
      <h1>My Board Games</h1>
      {filteredGames.map((game) => {
        return <GameCard game={game} />;
      })}
    </div>
  );
}

export default App;
