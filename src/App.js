import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Error from "./components/Error";
import { api_key, base_url, icon_base_url } from "./variables/variables";
import getData from "./utils/getData";
import "./styles/style.css";
import "./styles/media.css";

const App = () => {
  const [apiKey] = useState(api_key);
  const [baseUrl] = useState(base_url);
  const [iconBaseUrl] = useState(icon_base_url);
  const [temp, setTemp] = useState(undefined);
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

    const inputValue = e.target.elements.query.value;
    let query = inputValue.trim();

    if (query) setLoading(true);

    const url = `${baseUrl}&appid=${apiKey}&q=${query}`;
    const data = await getData(url);
    const code = data.cod;

    const clearState = () => {
      setTemp(undefined);
      setCity(undefined);
      setCountry(undefined);
      setWindDirection(undefined);
      setWindSpeed(undefined);
      setIcon(undefined);
      setDescription(undefined);
    };

    const setState = () => {
      setTemp(data.main.temp);
      setCity(data.name);
      setCountry(data.sys.country);
      setWindDirection(data.wind.deg);
      setWindSpeed(data.wind.speed);
      setIcon(`${iconBaseUrl}${data.weather[0].icon}.png`);
      setDescription(data.weather[0].description);
    };

    if (code == 400) {
      clearState();
      setError(undefined);
      setLoading(false);
    } else if (code == 404) {
      clearState();
      setError("Город не найден.");
      setLoading(false);
    } else if (code == 200) {
      setState();
      setError(undefined);
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Header />
      <Form loading={loading} getWeather={getWeather} />
      {!loading && city && (
        <Weather
          temp={temp}
          city={city}
          country={country}
          icon={icon}
          description={description}
          windSpeed={windSpeed}
          windDirection={windDirection}
        />
      )}
      <Error error={error} />
    </div>
  );
};

export default App;
