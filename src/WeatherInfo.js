import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

const WeatherInfo = (props) => {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description} </li>
      </ul>
      <div className="row mt-4">
        <div className="col-6">
          <div className="d-inline-block">
            <div className="WeatherIcon d-inline-block">
              <WeatherIcon
                code={props.data.icon}
                alt={props.data.description}
                width={85}
                height={85}
              />
            </div>
            <div className="d-inline-block">
              <WeatherTemperature celcius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
