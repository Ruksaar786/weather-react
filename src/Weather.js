import React from "react";
import axios from "axios";

export default function () {
  function handleResponse(response) {
    alert(`The weather in New York is ${response.data.main.temp}°C`);
  }
  let apikey = "f09d3949047ab6c9e3bcaf79cf61f619";
  let apiUrl = `https.//api.openweathermap.org/data/2.5/weather?q=New York&appid=${apikey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return <h2>hello from weather</h2>;
}
