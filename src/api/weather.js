export const fetchWeather = async ({ lat, lon }) => {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&%20exclude=current,daily&appid=${process.env.REACT_APP_WEATHER_APP_ID}`
  );
  let data = await response.json();
  return { current: data?.current, daily: data?.daily };
};
