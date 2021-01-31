import React from "react";

function Weather(props) {
  const plusSign = props.temperature > 0 ? <span>+</span> : null;

  let windDirection;

  if (props.windDirection >= 247 && props.windDirection <= 292) {
    windDirection = <span>← (З)</span>;
  } else if (props.windDirection >= 293 && props.windDirection <= 337) {
    windDirection = <span>↖ (СЗ)</span>;
  } else if (props.windDirection >= 338 && props.windDirection <= 22) {
    windDirection = <span>↑ (С)</span>;
  } else if (props.windDirection >= 23 && props.windDirection <= 67) {
    windDirection = <span>↗ (СВ)</span>;
  } else if (props.windDirection >= 68 && props.windDirection <= 112) {
    windDirection = <span>→ (В)</span>;
  } else if (props.windDirection >= 113 && props.windDirection <= 157) {
    windDirection = <span>↘ (ЮВ)</span>;
  } else if (props.windDirection >= 158 && props.windDirection <= 202) {
    windDirection = <span>↓ (Ю)</span>;
  } else if (props.windDirection >= 203 && props.windDirection <= 246) {
    windDirection = <span>↙ (ЮЗ)</span>;
  }

  return (
    <div className="weather">
      {props.city && (
        <p className="weather-city">
          {props.city}, {props.country}
        </p>
      )}

      {props.temperature && (
        <p className="weather-temp">
          {plusSign}
          {Math.round(props.temperature)}°C
        </p>
      )}

      {props.description && (
        <div className="weather-description">
          <img
            className="weather-description-icon"
            src={props.icon}
            alt="icon"
          />
          <span className="weather-description-text">{props.description}</span>
        </div>
      )}

      {props.windSpeed && (
        <p className="weather-wind">
          Ветер: {Math.round(props.windSpeed)} м/с {windDirection}
        </p>
      )}

      {props.error && <p className="error">{props.error}</p>}
    </div>
  );
}

export default Weather;
