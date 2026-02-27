import type { Package } from "./game";
import type { User } from "./user";

export interface Order {
  id: number;
  userId: number;
  packageId: number;

  // Changed to string to match DBML varchar and handle long IDs
  gameUserId: string;
  serverId: string;

  // Match your DBML logic
  paymentMethod: "credit_card" | "aba" | "aceleda" | "manual" | "balance";
  status: "pending" | "processing" | "completed" | "failed";

  // Tracking field from your DBML
  supplierTransactionId?: string;

  createdAt: string;
  updatedAt: string;

  // Optional: Included relations for Admin Tables
  user?: User;
  package?: Package;
}
