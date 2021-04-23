import React from "react";
import AddInput from "./AddInput";
import AddButton from "./AddButton";
import { addTodo } from "../redux/actions";
import { useDispatch } from "react-redux";

const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    let inputValue = e.target.elements.add.value.trim();

    if (inputValue) {
      dispatch(
        addTodo({
          title: inputValue,
          id: Date.now(),
          completed: false
        })
      );

      e.target.elements.add.value = "";
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <AddInput />
      <AddButton />
    </form>
  );
};

export default Form;
