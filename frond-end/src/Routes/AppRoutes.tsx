import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import GameDetail from "../pages/GameDetail";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import { Register } from "../pages/Register";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Layout Routes */}
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Navigate to="/" replace />} />

        {/* Simplified Dynamic Route */}
        <Route path="games/:gameSlug" element={<GameDetail />} />

        <Route path="checkout" element={<Checkout />} />
      </Route>

      {/* Auth Routes - Consistent Casing */}
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

      {/* Fallback Route */}
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
