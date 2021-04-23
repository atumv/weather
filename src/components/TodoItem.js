import React from "react";
import { toggleTodo, removeTodo } from "../redux/actions";
import { useDispatch } from "react-redux";

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  return (
    <label>
      <li className="todo-item">
        <div className="input-wrap">
          <input
            className="check-custom"
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          <span className="check-toggle" />
          <span className="task-number">{index + 1}</span>
          <span className="task-title">{todo.title}</span>
        </div>

        <button
          className="rm-btn"
          onClick={() => dispatch(removeTodo(todo.id))}
        >
          &times;
        </button>
      </li>
    </label>
  );
};

export default TodoItem;
