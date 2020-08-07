import React from "react";
import Card from "./card.jsx";

function Forecast({ daily, tempPresenter }) {
  return (
    <div className="forecast-banner">
      {daily.map((data) => (
        <Card data={data} tempPresenter={tempPresenter} />
      ))}
    </div>
  );
}

export default Forecast;
