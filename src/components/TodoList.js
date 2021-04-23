import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, removeTodo }) => (
  <ul className="todo-list">
    {todos.map((todo, index) => (
      <TodoItem
        todo={todo}
        key={todo.id}
        index={index}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
      />
    ))}
  </ul>
);

export default TodoList;
