import React, { useRef, useEffect } from "react";

const AddInput = () => {
  const inputRef = useRef();

  useEffect(() => inputRef.current.focus());

  return (
    <input
      className="add-input"
      placeholder="Что нужно сделать ?"
      name="add"
      ref={inputRef}
    />
  );
};

export default AddInput;
