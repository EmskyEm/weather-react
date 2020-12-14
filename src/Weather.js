import React from "react";
import axios from "axios";
import SpinnerComponent from "react-element-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in ${response.data.name} is 
${response.data.main.temp}°C`);
  }
  let apiKey = "8f2ac4f91e4219d33d78cabca0939d87";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?
  q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return <SpinnerComponent loading={true} position="global" />;
}
