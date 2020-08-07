import React from "react";
import moment from "moment";
import { toCelcius, toFahrenheit } from "utils/tempConverter";

function Card({ data, tempPresenter }) {
  const dayTemp =
    tempPresenter === "celsius"
      ? toCelcius(data?.temp?.day)
      : toFahrenheit(data?.temp?.day);
  const mornTemp =
    tempPresenter === "celsius"
      ? toCelcius(data?.temp?.morn)
      : toFahrenheit(data?.temp?.morn);
  return (
    <div className="card-banner">
      <div className="card-date">
        {moment(data.dt * 1000).format("ddd, MMM Do")}
      </div>
      <div className="card-weather">
        <div>
          <img
            src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}.png`}
          />
        </div>
        <div className="card-day-morn-temp">
          {dayTemp} / {mornTemp}° {tempPresenter === "celsius" ? "C" : "F"}
        </div>
      </div>
      <div className="card-desc">{data?.weather?.[0]?.description}</div>
    </div>
  );
}
export default Card;
