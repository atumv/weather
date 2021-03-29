import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos }) {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => {
        return <TodoItem todo={todo} key={todo.id} index={index} />;
      })}
    </ul>
  );
}

export default TodoList;
