import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form/Form";
import Weather from "./components/Weather";
import "./styles/style.css";
import "./styles/media.css";

const api_key = "4c3dab4e5b6cd35fa657b1440eb74bfb";

function App() {
  const [temperature, setTemperature] = useState(undefined);
  const [city, setCity] = useState(undefined);
  const [country, setCountry] = useState(undefined);
  const [windDirection, setWindDirection] = useState(undefined);
  const [windSpeed, setWindSpeed] = useState(undefined);
  const [icon, setIcon] = useState(undefined);
  const [description, setDescription] = useState(undefined);
  const [loading, setLoading] = useState(undefined);
  const [error, setError] = useState(undefined);

  const getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    if (city) setLoading(true);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric&lang=ru`;
    const request = await fetch(url);
    const response = await request.json();
    const status = response.cod;

    const clearState = () => {
      setTemperature(undefined);
      setCity(undefined);
      setCountry(undefined);
      setWindDirection(undefined);
      setWindSpeed(undefined);
      setIcon(undefined);
      setDescription(undefined);
    };

    if (status == 200) {
      setTemperature(response.main.temp);
      setCity(response.name);
      setCountry(response.sys.country);
      setWindDirection(response.wind.deg);
      setWindSpeed(response.wind.speed);
      setIcon(
        `https://openweathermap.org/img/wn/${response.weather[0].icon}.png`
      );
      setDescription(response.weather[0].description);
      setError(undefined);
      setLoading(false);
    } else if (status == 400) {
      clearState();
      setError("Введите название города");
      setLoading(false);
    } else if (status == 404) {
      clearState();
      setError("Город не найден");
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Header />

      <Form loading={loading} getWeather={getWeather} />

      {loading === false && (
        <Weather
          temperature={temperature}
          city={city}
          country={country}
          icon={icon}
          description={description}
          windSpeed={windSpeed}
          windDirection={windDirection}
          error={error}
        />
      )}
    </div>
  );
}

export default App;
