import GameCard from "../../components/client/GameCard";
import { useEffect, useState } from "react";
import axios from "axios";
import type { Game } from "../../types/game";

const Home = () => {
  const [games, setGames] = useState<Game[]>([]);
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/games");
        setGames(response.data);
        console.log("Fetched games:", response.data);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };
    fetchGames();
  }, []);
  return (
    <div className="min-h-screen w-full  p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default Home;
