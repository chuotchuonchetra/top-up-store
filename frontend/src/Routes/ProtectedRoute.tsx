import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  allowedRoles: string[]; // e.g., ["admin"] or ["customer", "admin"]
}

const ProtectedRoute = ({ allowedRoles }: ProtectedRouteProps) => {
  const token = localStorage.getItem("token");

  // In a real app, you'd get this from your AuthContext or decode the JWT
  // For this example, let's assume you stored the role in localStorage during login
  const userRole = localStorage.getItem("role");

  if (!token) {
    // Not logged in? Send to login page
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(userRole || "")) {
    // Logged in but wrong role? Send to unauthorized page or home
    return <Navigate to="/unauthorized" replace />;
  }

  // Role matches! Render the child components
  return <Outlet />;
};

export default ProtectedRoute;
