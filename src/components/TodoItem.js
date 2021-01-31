import React from "react";

function TodoItem({ todo, index, toggleTodo, removeTodo }) {
  return (
    <label>
      <li className="todo-item">
        <div className="input-wrap">
          <input
            className="check-custom"
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span className="check-toggle" />
          <span className="task-number">{index + 1}</span>
          <span className="task-title">{todo.title}</span>
        </div>

        <button className="rm-btn" onClick={() => removeTodo(todo.id)}>
          &times;
        </button>
      </li>
    </label>
  );
}

export default TodoItem;
