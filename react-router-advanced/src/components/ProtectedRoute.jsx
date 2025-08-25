// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  // Simulate authentication (you can replace this with real logic later)
  const isAuthenticated = false; // change to true to simulate login

  if (!isAuthenticated) {
    // Redirect unauthenticated users to home or login
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;