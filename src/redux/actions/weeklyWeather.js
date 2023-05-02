import { SET_WEEKLY_WEATHER } from '../../constants';

export const setWeeklyWeather = (payload) => ({
  type: SET_WEEKLY_WEATHER,
  payload,
});

export const weeklyWeather = () => async (dispatch) => {
  try {
    const success = async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&daily&units=metric&appid=96d3e65e42fcebf017e2d63be1540395`
      );

      const data = await response.json();
      dispatch(setWeeklyWeather(data));
    };

    const error = () => {
      console.log('Неудалось определить ваше местоположение.');
    };

    if (!navigator.geolocation) {
      console.log('Нет разрешения на получение геоданных');
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  } catch (error) {
    console.log(error);
  }
};
