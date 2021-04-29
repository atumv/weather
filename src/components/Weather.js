import React from "react";

const Weather = props => {
  const {
    temp,
    city,
    country,
    icon,
    description,
    windSpeed,
    windDirection
  } = props;

  const plusSign = temp > 0 ? <span>+</span> : null;

  let windDir;

  if (windDirection >= 247 && windDirection <= 292) {
    windDir = <span>← (З)</span>;
  } else if (windDirection >= 293 && windDirection <= 337) {
    windDir = <span>↖ (СЗ)</span>;
  } else if (windDirection >= 338 && windDirection <= 22) {
    windDir = <span>↑ (С)</span>;
  } else if (windDirection >= 23 && windDirection <= 67) {
    windDir = <span>↗ (СВ)</span>;
  } else if (windDirection >= 68 && windDirection <= 112) {
    windDir = <span>→ (В)</span>;
  } else if (windDirection >= 113 && windDirection <= 157) {
    windDir = <span>↘ (ЮВ)</span>;
  } else if (windDirection >= 158 && windDirection <= 202) {
    windDir = <span>↓ (Ю)</span>;
  } else if (windDirection >= 203 && windDirection <= 246) {
    windDir = <span>↙ (ЮЗ)</span>;
  }

  return (
    <div className="weather">
      <p className="weather-city">
        {city}, {country}
      </p>
      <p className="weather-temp">
        {plusSign}
        {Math.round(temp)}°C
      </p>
      <div className="weather-description">
        <img className="weather-description-icon" src={icon} alt="icon" />
        <span className="weather-description-text">{description}</span>
      </div>
      <p className="weather-wind">
        Ветер: {Math.round(windSpeed)} м/с {windDir}
      </p>
    </div>
  );
};

export default Weather;
