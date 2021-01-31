import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodo, removeTodo }) {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            index={index}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
