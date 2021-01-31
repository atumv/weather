import React from "react";

function AddTodo({ createTodo }) {
  function submitHandler(e) {
    e.preventDefault();
    let inputValue = e.target.elements.add.value;

    if (inputValue.trim()) {
      createTodo(inputValue);
      e.target.elements.add.value = "";
    }
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <input
        className="add-input"
        placeholder="Что нужно сделать ?"
        name="add"
        autoFocus
      />
      <button className="add-btn" type="submit">
        <span className="add-btn-plus-sign">&times;</span> Добавить
      </button>
    </form>
  );
}

export default AddTodo;
