export const toCelcius = (tempInKelvin) => {
  return parseInt(parseFloat(tempInKelvin) - 273.15);
};

export const toFahrenheit = (tempInKelvin) => {
  return parseInt((parseFloat(tempInKelvin) - 273.15) * 1.8 + 32);
};
