import React from "react";

const CityExamples = ({ inputRef, getBtnRef }) => {
  const getWeatherExample = e => {
    e.preventDefault();
    inputRef.current.value = e.target.textContent;
    getBtnRef.current.click();
    inputRef.current.value = '';
  };

  const attributes = {
    className: "city-example-link",
    href: "#",
    onClick: getWeatherExample
  };

  return (
    <div className="city-examples">
      <a {...attributes}>Нью-Йорк</a>
      <a {...attributes}>Токио</a>
      <a {...attributes}>Москва</a>
      <a {...attributes}>Хельсинки</a>
      <a {...attributes}>Лондон</a>
      <a {...attributes}>Стамбул</a>
      <a {...attributes}>Новосибирск</a>
    </div>
  );
};

export default CityExamples;
