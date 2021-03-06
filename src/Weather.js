import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      img: `/${response.data.weather[0].icon}.png`,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    const apiKey = "8f2ac4f91e4219d33d78cabca0939d87";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(current);
  }

  function current(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const apiKey = "8f2ac4f91e4219d33d78cabca0939d87";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <div className="input-group text-center mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    Write any city in the 🌎 here
                  </span>
                </div>
                <input
                  type="search"
                  placeholder="...................................................."
                  autoFocus="on"
                  autoComplete="on"
                  className="form-control shadow-sm"
                  onChange={handleCityChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-secondary btn-default mr-1"
              >
                Search
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-default ml-1"
                onClick={getCurrentLocation}
              >
                Current
              </button>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <Forecast city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
