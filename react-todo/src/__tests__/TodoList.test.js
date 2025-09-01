import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList"; // adjust path if your file is elsewhere

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  });

  test("can add a new todo", () => {
    render(<TodoList />);
    fireEvent.change(screen.getByPlaceholderText(/add a new todo/i), {
      target: { value: "New Task" },
    });
    fireEvent.click(screen.getByText(/Add/i));
    expect(screen.getByText(/New Task/i)).toBeInTheDocument();
  });

  test("can toggle a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText(/Learn React/i);
    fireEvent.click(todo);
    expect(todo).toHaveClass("completed");
  });

  test("can delete a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText(/Learn React/i);
    fireEvent.click(screen.getByText(/Delete/i));
    expect(todo).not.toBeInTheDocument();
  });
});