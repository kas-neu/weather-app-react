import React from "react";
import "./Weather.css";

const Weather = () => {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary " />
          </div>
        </div>
      </form>
      <h1>London</h1>
      <ul>
        <li>Wednesday 7:00</li>
        <li>Mostly Cloudy </li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="mostly cloudy"
            className="float-left"
          ></img>
          <span className="temp">6</span>
          <span className="unit">ºC</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Weather;
