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
      img: `http://openweather.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: response.data.humidity,
      wind: response.data.wind.speed,
      feelsLike: response.data.feelsLike,
    });
  }

  function search() {
    const apiKey = "8f2ac4f91e4219d33d78cabca0939d87";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
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
              >
                Current
              </button>
            </div>
          </div>
        </form>
        <weatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
