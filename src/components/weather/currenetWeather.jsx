import React, { useEffect, useState } from "react";
import moment from "moment";

import { toCelcius, toFahrenheit } from "utils/tempConverter";

function CurrentWeather({ current, tempPresenter }) {
  useEffect(() => {}, []);

  return (
    <div className="current-weather-banner">
      <div>{moment(current.dt * 1000).format("MMMM Do YYYY, h:mm:ss a")}</div>
      <div className="temp-banner">
        <img
          src={`https://openweathermap.org/img/wn/${current?.weather?.[0]?.icon}@2x.png`}
        />
        <span>
          {tempPresenter === "celsius"
            ? toCelcius(current?.temp)
            : toFahrenheit(current?.temp)}
          ° {tempPresenter === "celsius" ? "C" : "F"}
        </span>
      </div>
      <div className="description-banner">
        Feels like{" "}
        {tempPresenter === "celsius"
          ? toCelcius(current?.temp)
          : toFahrenheit(current?.temp)}
        °{tempPresenter === "celsius" ? "C" : "F"}.{" "}
        <span className="description">
          {current?.weather?.[0]?.description}
        </span>
        .
      </div>
      <div className="properties-banner">
        <div>Humidity: {current?.humidity}</div>
        <div>Dew point: {current?.dew_point}</div>
        <div>Pressure: {current?.pressure}hPa</div>
        <div>UV: {current?.uvi}</div>
      </div>
    </div>
  );
}

export default CurrentWeather;
