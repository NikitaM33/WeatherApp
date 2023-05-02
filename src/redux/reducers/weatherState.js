import {
  SET_WEATHER_DATA,
  SET_WEEKLY_WEATHER,
  SET_NEW_CITY,
} from '../../constants';

const initialStore = {
  currentWeather: null,
  weeklyForecast: null,
};

const weatherState = (state = initialStore, action) => {
  switch (action.type) {
    case SET_WEATHER_DATA:
      return {
        ...state,
        currentWeather: action.payload,
      };

    case SET_WEEKLY_WEATHER:
      const weatherList = action.payload.list;
      const fiveDayForecast = [];

      weatherList.forEach((item) => {
        const time = item.dt_txt.slice(11, 16);

        if (time == '15:00') {
          fiveDayForecast.push(item);
        }
      });

      return {
        ...state,
        weeklyForecast: fiveDayForecast,
      };

    case SET_NEW_CITY:
      return {
        ...state,
        currentWeather: action.payload,
      };

    default:
      return state;
  }
};

export default weatherState;
