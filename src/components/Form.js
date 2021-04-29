import React from "react";
import AddInput from "./AddInput";
import AddButton from "./AddButton";

const Form = ({ onSubmit }) => (
  <form className="form" onSubmit={onSubmit}>
    <AddInput />
    <AddButton />
  </form>
);

export default Form;
