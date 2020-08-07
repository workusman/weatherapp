import React from "react";
import Card from "./card.jsx";

function Forecast({ daily, tempPresenter }) {
  return (
    <div className="forecast-banner">
      {daily.map((data, index) => (
        <Card key={index} data={data} tempPresenter={tempPresenter} />
      ))}
    </div>
  );
}

export default Forecast;
