
// src/App.jsx
import React from "react";
import TodoList from "./components/TodoList"; // ✅ Make sure this path is correct

function App() {
  return (
    <div>
      <h1>React Todo App</h1>
      <TodoList /> {/* ✅ This ensures TodoList is rendered */}
    </div>
  );
}

export default App;