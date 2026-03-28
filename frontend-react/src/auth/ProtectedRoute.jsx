import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
//import { useNavigate } from "react-router-dom";
export default function ProtectedRoute() {
  const { isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );

  // Loading screen
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <CircularProgress />
      </div>
    );
  }

  // Not authenticated → redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Authenticated → render protected routes
  return <Outlet />;
}