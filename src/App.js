import React, { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import "./styles/style.css";
import "./styles/media.css";

function App() {
  const [todos, setTodos] = useState([]);

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false
        }
      ])
    );
  }

  return (
    <div className="wrapper">
      <h1 className="header">Список задач</h1>

      <AddTodo createTodo={addTodo} />

      {todos.length ? (
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
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
