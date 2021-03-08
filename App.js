import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Todos from "./Components/Todos";
import TodoForm from "./Components/TodoForm";
export default function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    console.log({ localTodos });
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);
  const addTodos = async (todo) => {
    setTodos([...todos, todo]);
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const markComplete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      <Container fluid>
        <h1 className="text-white">Todo With Local Storage</h1>
        <Todos todos={todos} markComplete={markComplete} />
        <TodoForm addTodos={addTodos} />
      </Container>
    </div>
  );
}
