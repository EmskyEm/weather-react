import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "London",
    temperature: "19",
    date: "Tuesday 24 November, 17:31",
    description: "Sunny",
    img: "/SUNwithCLOUD.png",
    backgroundIcon: "/background.SUN.png",
    humidity: 70,
    wind: 10,
    feelsLike: 6,
  };
  return (
    <div className="Weather">
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">
            Write any city in the 🌍 here
          </span>
          <input
            type="search"
            placeholder="...................................................."
            autoFocus="on"
            autoComplete="off"
            className="form-control shadow-sm"
          />
        </div>
      </div>
      <button type="search" className="btn btn-primary btn-default">
        Search
      </button>
      <button type="submit" className="btn btn-secondary btn-default">
        Current
      </button>
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
            </ul>
      </div>
    </div>
        <div className="col-4">
          <div className="weather-icon">
            <img
              src={weatherData.img}
              width="150"
              alt={weatherData.description}
            />

            <strong> {weatherData.temperature} </strong>
            <span className="units">
              <a href="/">°C</a> | <a href="/">°F</a>
            </span>
          </div>
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
      <img
        src={weatherData.backgroundIcon}
        width="300"
        alt=""
        className="corner-sun"
      />
      ​
      <img
        src={weatherData.backgroundIcon}
        width="550"
        alt=""
        className="left-corner-sun"
      />
    </div>
  );
}
