import { useState } from "react";
import HomePage from "./components/HomePage";
import { TEST_GAMES } from "./TEST_GAMES";
import RandomPage from "./components/RandomPage";
import { Link, Route, Routes } from "react-router-dom";
import GamePage from "./components/GamePage";

function App() {
  const [gamesList, setGamesList] = useState(TEST_GAMES);

  return (
    <div>
      <h1>My Board Games</h1>
      <Link to="/" className="btn-link me-3">Home</Link>
      <Link to="/random"className="btn-link">Random</Link>

      <Routes>
        <Route path="/" element={<HomePage gamesList={gamesList} />} />
        <Route path="/random" element={<RandomPage gamesList={gamesList} />} />
        <Route path="/games/:gameId" element={<GamePage gamesList={gamesList}/>}/>
      </Routes>
    </div>
  );
}

export default App;
