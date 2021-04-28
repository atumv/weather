import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos.map((todo, index) => (
      <TodoItem
        todo={todo}
        key={todo.id}
        index={index}
      />
    ))}
  </ul>
);

export default TodoList;
