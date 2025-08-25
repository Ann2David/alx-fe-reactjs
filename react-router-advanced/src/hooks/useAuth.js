// src/hooks/useAuth.js
import { useState } from "react";

export default function useAuth() {
  // simulate authentication status
  const [isAuthenticated] = useState(false); 
  return { isAuthenticated };
}