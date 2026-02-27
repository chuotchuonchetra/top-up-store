import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/shop/Home";
import GameDetail from "../pages/shop/GameDetail";
import Checkout from "../pages/shop/Checkout";
import Login from "../pages/auth/Login";
import { AdminLayout } from "../layouts/AdminLayout";
import { Dashboard } from "../pages/admin/AdminDashboard";
import { Orders } from "../pages/admin/Orders";
import { Register } from "../pages/auth/Register";
import { TransactionList } from "../pages/admin/Transaction";
import { MOCK_TRANSACTIONS } from "../assets/data/faketransaction";
import { OrderDetail } from "../components/admin/OrderDetail";
// import type { Order } from "../types/order";
// const fakeOrder: Order[] = [
//   {
//     id: 1001,
//     userId: 1,
//     packageId: 50,
//     gameUserId: "88273102",
//     serverId: "2021",
//     paymentMethod: "aba",
//     status: "completed",
//     supplierTransactionId: "TXN-99218-ML",
//     createdAt: "2026-02-18T08:30:00Z",
//     updatedAt: "2026-02-18T08:35:00Z",
//     user: {
//       id: 1,
//       username: "Sokha Dev",
//       email: "sokha@example.com",
//       balance: 500,
//       passwordHash: "hidden",
//       role: "customer",
//       createdAt: "2026-01-01T00:00:00Z",
//       updatedAt: "2026-01-01T00:00:00Z",
//     },
//     package: {
//       id: 50,
//       title: "56 Diamonds",
//       price: "$1.00",
//       amount: 56,
//       gameId: 1,
//       supplierCode: "MLBB-56",
//       createdAt: "2026-01-01T00:00:00Z",
//       updatedAt: "2026-01-01T00:00:00Z",
//     },
//   },
//   {
//     id: 1002,
//     userId: 2,
//     packageId: 51,
//     gameUserId: "9211004",
//     serverId: "5012",
//     paymentMethod: "manual",
//     status: "pending",
//     supplierTransactionId: undefined,
//     createdAt: "2026-02-18T09:15:00Z",
//     updatedAt: "2026-02-18T09:15:00Z",
//     user: {
//       id: 2,
//       username: "Bora King",
//       email: "bora@gmail.com",
//       balance: 0,
//       passwordHash: "hidden",
//       role: "customer",
//       createdAt: "2026-01-05T00:00:00Z",
//       updatedAt: "2026-01-05T00:00:00Z",
//     },
//     package: {
//       id: 51,
//       title: "257 Diamonds",
//       price: "$5.00",
//       amount: 257,
//       gameId: 1,
//       supplierCode: "MLBB-257",
//       createdAt: "2026-01-01T00:00:00Z",
//       updatedAt: "2026-01-01T00:00:00Z",
//     },
//   },
//   {
//     id: 1003,
//     userId: 3,
//     packageId: 80,
//     gameUserId: "vlad_gamer",
//     serverId: "Global",
//     paymentMethod: "aceleda",
//     status: "failed",
//     supplierTransactionId: "ERR-404-SUP",
//     createdAt: "2026-02-17T22:10:00Z",
//     updatedAt: "2026-02-17T22:12:00Z",
//     user: {
//       id: 3,
//       username: "Piseth ML",
//       email: "piseth@live.com",
//       balance: 10,
//       passwordHash: "hidden",
//       role: "customer",
//       createdAt: "2026-01-10T00:00:00Z",
//       updatedAt: "2026-01-10T00:00:00Z",
//     },
//     package: {
//       id: 80,
//       title: "600 UC",
//       price: "$10.00",
//       amount: 600,
//       gameId: 2,
//       supplierCode: "PUBG-600",
//       createdAt: "2026-01-01T00:00:00Z",
//       updatedAt: "2026-01-01T00:00:00Z",
//     },
//   },
//   {
//     id: 1004,
//     userId: 4,
//     packageId: 52,
//     gameUserId: "7762109",
//     serverId: "9912",
//     paymentMethod: "aba",
//     status: "processing",
//     supplierTransactionId: "TXN-AUTO-442",
//     createdAt: "2026-02-18T10:00:00Z",
//     updatedAt: "2026-02-18T10:05:00Z",
//     user: {
//       id: 4,
//       username: "Dara Smile",
//       email: "dara@topup.com",
//       balance: 2.5,
//       passwordHash: "hidden",
//       role: "customer",
//       createdAt: "2026-01-15T00:00:00Z",
//       updatedAt: "2026-01-15T00:00:00Z",
//     },
//     package: {
//       id: 52,
//       title: "Weekly Diamond Pass",
//       price: "$2.10",
//       amount: 1,
//       gameId: 1,
//       supplierCode: "MLBB-WDP",
//       createdAt: "2026-01-01T00:00:00Z",
//       updatedAt: "2026-01-01T00:00:00Z",
//     },
//   },
// ];

const AppRoutes = () => {
  return (
    <Routes>
      {/* Layout Routes */}
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Navigate to="/" replace />} />

        {/* Simplified Dynamic Route */}
        <Route path="/game/:gameSlug/:gameId" element={<GameDetail />} />

        <Route path="checkout" element={<Checkout />} />
      </Route>

      {/* Auth Routes - Consistent Casing */}
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

      {/* Fallback Route */}
      <Route path="*" element={<div>Page Not Found</div>} />
      <Route path="/admin" element={<AdminLayout />}>
        {/* Automatically redirect /admin to /admin/dashboard */}
        <Route index element={<Navigate to="dashboard" replace />} />

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
        <Route path="order/:orderId" element={<OrderDetail />} />
        <Route
          path="transaction"
          element={<TransactionList transactions={MOCK_TRANSACTIONS} />}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
