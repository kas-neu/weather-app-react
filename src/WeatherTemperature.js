import React, { useState } from "react";

const WeatherTemperature = (props) => {
  const [unit, setUnit] = useState("celcius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  if (unit === "celcius") {
    return (
      <div className="WeatherTemperature">
        <span className="temp">{Math.round(props.celcius)}</span>
        <span className="unit">
          ºC |{" "}
          <a href="/" onClick={showFahrenheit}>
            F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celcius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="temp">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="/" onClick={showCelcius}>
            {" "}
            ºC{" "}
          </a>{" "}
          | ºF
        </span>
      </div>
    );
  }
};

export default WeatherTemperature;
