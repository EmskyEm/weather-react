import React from "react";
import "./Forecast.css";

export default function ForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }
  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}°C`;
  }
  return (
    <div className="ForecastPreview col">
      <p>{hours()}</p>
      <img
        src={`/${props.data.weather[0].icon}.png`}
        alt={props.data.weather[0].description}
      />
      <p>{temperature()}</p>
    </div>
  );
}
