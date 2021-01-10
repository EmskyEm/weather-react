import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import Forecast from "./Forecast";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="container mt-5 ">
        <div className="row">
          <div className="col-4">
            <ul className="text-right">
              <li>
                <div>
                  <div className="text-uppercase">{props.data.city}</div>
                </div>
              </li>
              <li>
                <li>
                  <FormattedDate date={props.data.date} />
                </li>
              </li>
              <li className="text-capitalize">{props.data.description}</li>
            </ul>
          </div>
          <div className="col-4 text-center">
            <div className="weather-icon">
              <img
                src={props.data.img}
                width="150"
                alt={props.data.description}
              />
            </div>
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
          <div className="col-4">
            <ul className="text-left">
              <li> Feels like: {props.data.feelsLike}</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind}km/h</li>
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
