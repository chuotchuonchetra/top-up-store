// types/game.ts (Optional separate file)
export interface Game {
  id: string;
  title: string;
  imageUrl: string;
  publisher?: string;
  category: "Mobile" | "PC" | "Console";
}
