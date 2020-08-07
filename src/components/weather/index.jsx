import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "./styles.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "react-toastify/dist/ReactToastify.css";

import CurrentWeather from "./currenetWeather.jsx";
import Forecast from "./forecast.jsx";

import { fetchWeather } from "api/weather";
import { isEmpty } from "utils/obj";

function App() {
  const [current, setCurrent] = useState({}),
    [daily, setDaily] = useState([]),
    [lat, setLat] = useState(null),
    [lon, setLon] = useState(null),
    [tempPresenter, setTemPresenter] = useState("celsius");

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      alert("please provide location access");
      return;
    }
    !(lat || lon) && setCurrentPosition();
    lat && lon && setWeatherData();
  }, [navigator.geolocation, lat, lon]);

  function setCurrentPosition() {
    const params = new URLSearchParams(window.location.search);
    if (params.has("lat") && params.has("lon")) {
      setLat(params.get("lat"));
      setLon(params.get("lon"));
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      });
    }
  }

  async function setWeatherData() {
    const weatherData = await fetchWeather({ lat, lon });
    setCurrent(weatherData.current);
    setDaily(weatherData.daily);
  }

  return (
    <>
      <h1>Weather App</h1>
      <div className="temp-converter-btns">
        <button
          className={tempPresenter === "celsius" ? "active" : ""}
          onClick={() => setTemPresenter("celsius")}
        >
          Celcius
        </button>
        <button
          className={tempPresenter === "fahrenheit" ? "active" : ""}
          onClick={() => setTemPresenter("fahrenheit")}
        >
          Fahrenheit
        </button>
        {lon && lat && (
          <button
            onClick={() => {
              toast("Copied");
              navigator.clipboard.writeText(
                `${process.env.REACT_APP_BASE_URL}?lon=${lon}&lat=${lat}`
              );
            }}
          >
            Copy To Clipboard
          </button>
        )}
        <ToastContainer autoClose={2000} />
      </div>
      {isEmpty(current) && daily.length == 0 && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={80}
          width={80}
          className="loader"
        />
      )}
      <div className="main-banner">
        {!isEmpty(current) && (
          <CurrentWeather current={current} tempPresenter={tempPresenter} />
        )}
        {daily.length > 0 && (
          <Forecast daily={daily} tempPresenter={tempPresenter} />
        )}
      </div>
    </>
  );
}

export default App;
