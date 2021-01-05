import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      img: "/SUNwithCLOUD.png",
      humidity: response.data.humidity,
      wind: response.data.wind.speed,
      feelsLike: response.data.feelsLike,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col">
            <form>
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
            </form>
          </div>
        </div>
        <div className="container mt-5 ">
          <div className="row">
            <div className="col-4">
              <ul className="text-right">
                <li>
                  <div>
                    <div className="text-uppercase">{weatherData.city}</div>
                  </div>
                </li>
                <li>
                  <li>
                    <FormattedDate date={weatherData.date} />
                  </li>
                </li>
                <li className="text-capitalize">{weatherData.description}</li>
              </ul>
            </div>
            <div className="col-4 text-center">
              <div className="weather-icon">
                <img
                  src={weatherData.img}
                  width="150"
                  alt={weatherData.description}
                />
              </div>
              <div className="temperature">
                {Math.round(weatherData.temperature)}
              </div>
              <span className="units">
                <span>°C</span> | <span>°F</span>
              </span>
            </div>
            <div className="col-4">
              <ul className="text-left">
                <li> Feels like: {weatherData.feelsLike}</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind}km/h</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container forecast mt-5 mb-3">
          <Forecast />
        </div>
      </div>
    );
  } else {
    const apiKey = "8f2ac4f91e4219d33d78cabca0939d87";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
