const axios = require("axios");

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export async function getCurrentWeather(lat, lon) {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getForecast(lat, lon) {
  try {
    const response = await axios.get(
      `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getWeatherMap(z, x, y) {
  try {
    const response = await axios.get(
      `https://tile.openweathermap.org/map/{layer}/${z}/${x}/${y}.png?appid=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getGeocoding(city_name, limit) {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&limit=${limit}&appid=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
