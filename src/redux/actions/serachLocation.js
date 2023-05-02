import { SET_WEATHER_DATA } from '../../constants';
import { setWeeklyWeather } from '../actions/weeklyWeather';

const setWeatherData = (payload) => ({ type: SET_WEATHER_DATA, payload });

export const searchLocation = () => async (dispatch) => {
  try {
    const success = async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=96d3e65e42fcebf017e2d63be1540395`
      );

      // NEW CITY WEEK WEATHER FETCH
      const forecast = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&daily&units=metric&appid=96d3e65e42fcebf017e2d63be1540395`
      );

      const forecastData = await forecast.json();
      dispatch(setWeeklyWeather(forecastData));

      const data = await response.json();
      dispatch(setWeatherData(data));
    };

    const error = () => {
      console.log('Неудалось определить ваше местоположение.');
    };

    if (!navigator.geolocation) {
      console.log('Нет разрешения на определение местоположения.');
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  } catch (error) {
    console.log(error);
  }
};
