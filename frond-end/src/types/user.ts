export interface User {
  id: number;
  username: string;
  email: string;
  role: "admin" | "customer";
  passwordHash: string;
  balance: number;
  createdAt: string;
  updatedAt: string;
}
