import React from "react";

interface GameCardProps {
  game: {
    title: string;
    imageUrl: string;
    category?: string;
  };
  onViewDetails: () => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, onViewDetails }) => {
  return (
    <div
      onClick={onViewDetails}
      className="group relative w-full max-w-60 cursor-pointer overflow-hidden rounded-xl bg-slate-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
      {/* Image Container */}
      <div className="aspect-3.5/4 overflow-hidden">
        <img
          src={game.imageUrl}
          alt={game.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent opacity-80" />

      {/* Text Content */}
      <div className="absolute bottom-0 p-4 w-full">
        {game.category && (
          <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold">
            {game.category}
          </span>
        )}
        <h3 className="text-lg font-bold text-white line-clamp-1 group-hover:text-blue-300 transition-colors">
          {game.title}
        </h3>

        <p className="mt-1 text-md text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Top-up available →
        </p>
      </div>
    </div>
  );
};

export default GameCard;
