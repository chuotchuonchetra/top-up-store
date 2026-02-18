import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/shop/Home";
import GameDetail from "../pages/shop/GameDetail";
import Checkout from "../pages/shop/Checkout";
import Login from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";
import { AdminLayout } from "../layouts/AdminLayout";

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
      <Route path="admindashboard" element={<AdminLayout />} />
    </Routes>
  );
};

export default AppRoutes;
