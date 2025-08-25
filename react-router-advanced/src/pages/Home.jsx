import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

// 🔒 Protected Route wrapper
function ProtectedRoute({ isAuthenticated, children }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  // simple authentication state simulation
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <nav style={{ display: "flex", gap: "1rem", marginBottom: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:postId" element={<Post />} /> {/* 🔥 Dynamic route */}

        {/* Login Route */}
        <Route path="/login" element={<Login setAuth={setIsAuthenticated} />} />

        {/* Protected Route */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;