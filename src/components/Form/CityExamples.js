import React from "react";

function CityExamples({ inputRef, getBtnRef }) {
  function getExampleWeather(e) {
    e.preventDefault();
    inputRef.current.value = e.target.textContent;
    getBtnRef.current.click();
  }

  const attr = {
    className: "city-example-link",
    href: "#",
    onClick: getExampleWeather
  };

  return (
    <div className="city-examples">
      <a {...attr}>Нью-Йорк</a>
      <a {...attr}>Токио</a>
      <a {...attr}>Москва</a>
      <a {...attr}>Хельсинки</a>
      <a {...attr}>Лондон</a>
      <a {...attr}>Стамбул</a>
      <a {...attr}>Новосибирск</a>
    </div>
  );
}

export default CityExamples;
