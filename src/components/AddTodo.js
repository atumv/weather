import React from "react";
import { addTodo } from "../redux/actions";
import { useDispatch } from "react-redux";

function AddTodo() {
  const dispatch = useDispatch();

  function submitHandler(e) {
    e.preventDefault();
    let inputValue = e.target.elements.input.value;
    
    if (inputValue.trim()) {
      dispatch(addTodo({
        id: Date.now(),
        completed: false,
        title: inputValue
      }));

      e.target.elements.input.value = '';
    }
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <input
        className="add-input"
        placeholder="Что нужно сделать ?"
        name="input"
        autoFocus
      />
      <button className="add-btn" type="submit">
        <span className="add-btn-plus-sign">&times;</span> Добавить
      </button>
    </form>
  );
}

export default AddTodo;
