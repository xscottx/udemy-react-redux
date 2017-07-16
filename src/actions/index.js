import axios from 'axios';

// hoangvo@gmail.com openweathermap.org
const API_KEY = '009e2024764c4872104d57c8b44d4029';
// ES6 syntax to inject API_KEY value by using template strings
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
// Middleware lets action pass, manipulates it, logs it, or stops it.  Like a bouncer
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); // will return a promise named 'request'

  // console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
