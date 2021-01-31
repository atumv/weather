import React, { useRef, useEffect } from "react";

function Input({ setInputRef }) {
  const input = useRef(null);

  useEffect(() => {
    setInputRef(input);
    input.current.focus();
  });

  return (
    <input
      className="city-input"
      type="text"
      name="city"
      placeholder="Введите город"
      ref={input}
    />
  );
}

export default Input;
