import React from "react";
import "./ForecastElement.css";

export default function ForecastElement(props) {
  return (
    <div className="col-2 text-center">
      <div className="forecast-hours">{props.time}</div>
      <div className="forecast-icon">
        <img src={props.icon} alt={props.description} />
      </div>
      <div className="forecast-temperature">
        <strong>{props.temperature_max}°</strong>
        {props.temperature_min}°
      </div>
    </div>
  );
}
