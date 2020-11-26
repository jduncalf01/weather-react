import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Weather() {
  let weatherData = {
    city: "Los Angeles",
    date: "Friday, 11:45am",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 10,
    temperature: 88
  };
  return (
    <div className="Weather">
      <div className="form">
        <form className="form-inline">
          <div className="form-group mx-sm-3 mb-2 city-field">
            <input
              type="search"
              className="form-control shadow-sm"
              placeholder="Enter a city"
              size="40"
            />
          </div>
          <button type="submit" className="btn btn-primary mb-2 shadow-sm">
            Search
          </button>
          <button
            type="submit"
            className="btn btn-primary mb-2 shadow-sm currentLocation"
          >
            Current Location
          </button>
        </form>
      </div>
      <div className="row">
        <div className="col-6">
          <img
            src={weatherData.imgUrl}
            className="main-img"
            alt={weatherData.description}
          />
        </div>
        <div className="col-6">
          <h1>
            {weatherData.temperature}{" "}
            <span className="temperature">
              <a href="/" class="active">
                °C
              </a>{" "}
              | <a href="/">°F</a>
            </span>
          </h1>
          <h3>{weatherData.city}</h3>
          <h3>{weatherData.date}</h3>
          <h3>{weatherData.description}</h3>
          <h3>Humidity: {weatherData.humidity}%</h3>
        </div>
      </div>
    </div>
  );
}