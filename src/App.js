import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useSelector } from "react-redux";
import "./styles/style.css";
import "./styles/media.css";

function App() {
  const todos = useSelector(state => state);

  return (
    <div className="wrapper">
      <h1 className="header">Список задач</h1>

      <AddTodo />

      {todos.length ? (
        <TodoList todos={todos} />
      ) : (
        <div className="no-tasks">
          <p className="no-tasks-msg">Список задач пуст.</p>
          <p className="no-tasks-msg">Добавьте задачу чтобы начать работу.</p>
        </div>
      )}
    </div>
  );
}

export default App;
