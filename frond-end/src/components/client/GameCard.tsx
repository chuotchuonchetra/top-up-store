import React from "react";
import { useNavigate } from "react-router-dom"; // Use navigation instead of manual click prop

interface GameCardProps {
  game: {
    id: number;
    name: string;
    imageUrl: string;
    slug: string;
    publisher?: string;
    status: string;
  };
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/game/${game.slug}/${game.id}`)} // Dynamic routing
      className="group relative w-full max-w-60 cursor-pointer overflow-hidden rounded-xl bg-slate-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
      {/* Image Container */}
      <div className="aspect-[3.5/4] overflow-hidden">
        <img
          src={game.imageUrl}
          alt={game.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent opacity-80" />

      {/* Text Content */}
      <div className="absolute bottom-0 p-4 w-full">
        {game.publisher && (
          <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold">
            {game.publisher}
          </span>
        )}
        <h3 className="text-lg font-bold text-white line-clamp-1 group-hover:text-blue-300 transition-colors">
          {game.name}
        </h3>

        {/* Dynamic Status / Action */}
        <p className="mt-1 text-sm text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {game.status === "active" ?
            "Top-up available →"
          : "Under Maintenance"}
        </p>
      </div>
    </div>
  );
};

export default GameCard;
