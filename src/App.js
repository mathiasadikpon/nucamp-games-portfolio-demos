import { useState } from "react";
import HomePage from "./components/HomePage";
import { TEST_GAMES } from "./TEST_GAMES";
import RandomPage from "./components/RandomPage";

function App() {
  
  const [gamesList , setGamesList ] = useState(TEST_GAMES);
  

  return (
    <div>
      <h1>My Board Games</h1>
      <HomePage gamesList ={gamesList } />
      <RandomPage gamesList ={gamesList } />
    </div>
  );
}

export default App;
