import React from "react";
import ForecastElement from "./ForecastElement";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="row">
      <ForecastElement
        time="01:00"
        icon="/01d.png"
        description="Sunny"
        temperature_max="20"
        temperature_min="18"
      />
      <ForecastElement
        time="04:00"
        icon="/01d.png"
        description="Sunny"
        temperature_max="20"
        temperature_min="18"
      />
      <ForecastElement
        time="07:00"
        icon="/01d.png"
        description="Sunny"
        temperature_max="20"
        temperature_min="18"
      />
      <ForecastElement
        time="10:00"
        icon="/01d.png"
        description="Sunny"
        temperature_max="20"
        temperature_min="18"
      />
      <ForecastElement
        time="13:00"
        icon="/01d.png"
        description="Sunny"
        temperature_max="20"
        temperature_min="18"
      />
      <ForecastElement
        time="16:00"
        icon="/01d.png"
        description="Sunny"
        temperature_max="20"
        temperature_min="18"
      />
    </div>
  );
}
