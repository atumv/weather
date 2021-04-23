import React, { useRef, useEffect } from "react";

const Input = ({ setInputRef }) => {
  const input = useRef();

  useEffect(() => {
    setInputRef(input);
  }, []);

  useEffect(() => input.current.focus());

  return (
    <input
      className="city-input"
      type="text"
      name="query"
      placeholder="Введите город"
      ref={input}
    />
  );
};

export default Input;
