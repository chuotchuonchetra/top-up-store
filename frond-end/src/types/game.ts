export interface Package {
  id: number;
  gameId: number;
  title: string; // e.g., "86 Diamonds"
  amount: number;
  price: string | number; // String if formatted by backend, number if raw decimal
  supplierCode: string;
  createdAt: string;
  updatedAt: string;
}

export interface Game {
  id: number;
  name: string;
  slug: string;
  publisher: string;
  status: "active" | "maintenance" | "inactive"; // Union type for better safety
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  // This matches your Sequelize "include"
  packages: Package[];
}
