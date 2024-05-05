import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

const WeatherForecast = () => {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="01d" width={60} height={60} />
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max">19º</span>
            <span className="WeatherForecast-temperature-min">10º</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherForecast;
