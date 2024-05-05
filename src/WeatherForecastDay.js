import React from "react";
import WeatherIcon from "./WeatherIcon";

const WeatherForecastDay = (props) => {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }
  function day() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    return days[day];
  }

  return (
    <div>
      {" "}
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} width={60} height={60} />
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}º
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}º
        </span>
      </div>{" "}
    </div>
  );
};

export default WeatherForecastDay;
