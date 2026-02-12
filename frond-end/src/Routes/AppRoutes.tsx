import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import { Register } from "../pages/Register";
import GameDetail from "../pages/GameDetail";
import Home from "../pages/Home";
import Checkout from "../pages/Checkout";

const AppRoutes = () => {
  return (
    <Routes>
      {/* 1. Wrap children with the Layout component as a parent Route */}
      <Route element={<MainLayout />}>
        {/* 2. These child routes will render inside the Layout's <Outlet /> */}
        <Route path="/" element={<Home />} />
        <Route path="/gamedetail" element={<GameDetail />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>

      {/* Routes outside the Layout (e.g., a Login page) */}
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
