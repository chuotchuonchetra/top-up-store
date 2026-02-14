import { useNavigate } from "react-router-dom";
import { gameList } from "../assets/data/GameDetail";
import GameCard from "../components/GameCard";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full  p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {gameList.map((game) => (
          <GameCard
            key={game.title}
            game={game}
            onViewDetails={() => navigate(`/games/${game.title}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
