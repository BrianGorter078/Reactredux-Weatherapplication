import axios from 'axios';

const API_KEY = '4d1adeb63b847098c94286e352d70bfc';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},nl`;
  const request = axios.get(url);

  console.log(request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
