import React, { useRef, useEffect } from 'react';

export const Input = ({ setInputRef }) => {
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
