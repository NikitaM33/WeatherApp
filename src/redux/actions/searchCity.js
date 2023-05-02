import { SET_NEW_CITY } from '../../constants';
import { setWeeklyWeather } from '../actions/weeklyWeather';

export const setNewCity = (payload) => ({ type: SET_NEW_CITY, payload });

export const searchCity = (city) => async (dispatch) => {
  try {
    const limit = 5;

    // SEARCH NEW CITY WEATHER FETCH
    const findCityCoords = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=96d3e65e42fcebf017e2d63be1540395`
    );
    const cityCoords = await findCityCoords.json();

    // NEW CITY CURRENT WEATHER FETCH
    const cityWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${cityCoords[0].lat}&lon=${cityCoords[0].lon}&units=metric&appid=96d3e65e42fcebf017e2d63be1540395`);
    const desiredCity = await cityWeather.json();

    // NEW CITY WEEK WEATHER FETCH
    const forecast = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${cityCoords[0].lat}&lon=${cityCoords[0].lon}&daily&units=metric&appid=96d3e65e42fcebf017e2d63be1540395`
    );

    const data = await forecast.json();
    dispatch(setWeeklyWeather(data));
    
    dispatch(setNewCity(desiredCity))
  } catch (error) {
    console.log('Не удалось найти выбранный город', error);
  }
};
