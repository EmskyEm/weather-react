import React from "react";
import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "London",
    temperature: "19",
    date: "Tuesday 24 November, 17:31",
    description: "Sunny",
    img: "/SUNwithCLOUD.png",
    humidity: 70,
    wind: 10,
    feelsLike: 6,
  };
  return (
    <div className="Weather">
      <div className="row">
        <div className="col">
          <form>
            <div className="input-group text-center mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  Write any city in the 🌎here
                </span>
              </div>
              <input
                type="search"
                placeholder="...................................................."
                autoFocus="on"
                autoComplete="off"
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
                <div>{weatherData.city}</div>
              </li>
              <li>
                <strong>{weatherData.date}</strong>
              </li>
              <li>{weatherData.description}</li>
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
            <strong> {weatherData.temperature} </strong>
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
}
