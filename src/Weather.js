import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Durban",
    temperature: 19,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "//ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: 80,
    wind: 10,
  };

  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <form id="search-form" className="mb-3">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a city..."
                  className="form-control"
                  id="city-input"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          <div className="overview">
            <h1>{weatherData.city}</h1>
            <ul>
              <li>
                Last updated: <span>{weatherData.date}</span>
              </li>
              <li>{weatherData.description}</li>
            </ul>
            <div className="row">
              <div className="col-6">
                <div className="d-flex weather-temperature">
                  <img src={weatherData.imgUrl} alt="" />
                  <strong>{weatherData.temperature}</strong>
                  <span className="units">
                    {" "}
                    <a href="/">°C</a> | <a href="/">°F</a>
                  </span>
                </div>
                <div className="col-6">
                  <ul>
                    <li>
                      Humidity: <span>{weatherData.humidity}</span>%
                    </li>
                    <li>
                      Wind: <span>{weatherData.wind}</span> km/h
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <small>
          <a
            href="https://github.com/Ruksaar786/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Ruksaar Adam
        </small>
      </div>
    </div>
  );
}
