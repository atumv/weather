import React from 'react'

function getCity(e) {
  e.preventDefault()
  document.querySelector('.city-input').value = e.target.textContent
  document.querySelector('.get-btn').click()
}

function CityExamples() {
  
  const attr = {
    className: 'city-example-link',
    href: '#',
    onClick: getCity
  }

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
  )
}

export default CityExamples