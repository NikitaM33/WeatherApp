import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import style from './Search.module.scss';
import { searchCity } from '../../redux/actions/searchCity';
import { weeklyWeather } from '../../redux/actions/weeklyWeather';

const Search = () => {
  const dispatch = useDispatch();
  const { currentWeather, cityCoords } = useSelector(({ weatherState }) => weatherState);
  const [city, setCity] = useState('');

  const handleSearchCity = (e) => {
    e.preventDefault();
    dispatch(searchCity(city));
    dispatch(weeklyWeather(currentWeather.coord));
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className={style.mainSearch}>
      {/* SHOSEN CITY */}
      <div className={style.currentCity}>
        {`${currentWeather && currentWeather.name}, ${currentWeather && currentWeather.sys.country}`}
        <span>
          <svg
            width='13'
            height='8'
            viewBox='0 0 13 8'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M1.75 0.749999C1.04688 0.749999 0.695314 1.57031 1.20313 2.07812L6.20313 7.07812C6.51563 7.39062 7.02344 7.39062 7.33594 7.07812L12.3359 2.07812C12.8438 1.57031 12.4922 0.75 11.7891 0.75L1.75 0.749999Z'
              fill='#ADADAD'
            />
          </svg>
        </span>
      </div>

      {/* SERCH INPUT */}
      <form onSubmit={handleSearchCity} className={style.serchCity}>
        <input
          type='text'
          onChange={(e) => handleCity(e)}
          value={city}
          placeholder='Какой город найти?'
        />

        <div className={style.searchBtn}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 101 101'
            id='search'>
            <path d='M63.3 59.9c3.8-4.6 6.2-10.5 6.2-17 0-14.6-11.9-26.5-26.5-26.5S16.5 28.3 16.5 42.9 28.4 69.4 43 69.4c6.4 0 12.4-2.3 17-6.2l20.6 20.6c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4L63.3 59.9zm-20.4 4.7c-12 0-21.7-9.7-21.7-21.7s9.7-21.7 21.7-21.7 21.7 9.7 21.7 21.7-9.7 21.7-21.7 21.7z'></path>
          </svg>
        </div>
      </form>

      {/* SEARCH PLACE */}
      <button className={style.searchSvg}>
        <svg
          width='32'
          height='32'
          viewBox='0 0 64 64'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M4 45.5H60M7 49.5C8.7 49.5 8.7 50.5 10.3 50.5C12 50.5 12 49.5 13.6 49.5C15.3 49.5 15.3 50.5 16.9 50.5C18.6 50.5 18.6 49.5 20.2 49.5C21.9 49.5 21.9 50.5 23.5 50.5C25.2 50.5 25.2 49.5 26.8 49.5C28.5 49.5 28.5 50.5 30.1 50.5C31.8 50.5 31.8 49.5 33.4 49.5C35.1 49.5 35.1 50.5 36.7 50.5C38.4 50.5 38.4 49.5 40 49.5C41.7 49.5 41.7 50.5 43.3 50.5C45 50.5 45 49.5 46.6 49.5C48.3 49.5 48.3 50.5 49.9 50.5C51.6 50.5 51.6 49.5 53.2 49.5C54.9 49.5 54.9 50.5 56.5 50.5M7 54C8.7 54 8.7 55 10.3 55C12 55 12 54 13.6 54C15.3 54 15.3 55 16.9 55C18.6 55 18.6 54 20.2 54C21.9 54 21.9 55 23.5 55C25.2 55 25.2 54 26.8 54C28.5 54 28.5 55 30.1 55C31.8 55 31.8 54 33.4 54C35.1 54 35.1 55 36.7 55C38.4 55 38.4 54 40 54C41.7 54 41.7 55 43.3 55C45 55 45 54 46.6 54C48.3 54 48.3 55 49.9 55C51.6 55 51.6 54 53.2 54C54.9 54 54.9 55 56.5 55'
            stroke='#ffffff'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M20 16V45H8V16H20ZM20 15H8C7.4 15 7 15.4 7 16V45C7 45.6 7.4 46 8 46H20C20.6 46 21 45.6 21 45V16C21 15.4 20.6 15 20 15Z'
            fill='#ffffff'
          />
          <path
            d='M11.5 45V37.5H16.5V45M10.5 15V13H17.5V15M14 10V13M10.5 18.5H17.5M10.5 21.5H17.5M10.5 24.5H17.5M10.5 27.5H17.5M10.5 30.5H17.5M10.5 33.5H17.5M25.5 45V8C26.5 8.1 29.7 8.4 32.5 11C34.5 12.9 35.2 15 35.5 16C34.8 16.9 31.5 21.3 32.5 27C32.9 29.2 33.8 30.9 34.5 32V45M28 13.5H32M28 16.5H32M25.9 20.5H32.9M29.5 21V31.5M26 31.5H34M26 35H34'
            stroke='#ffffff'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M27.5 45V39H32.5V45M46.5 45V15L58.5 11V45M49.5 16.5V19.5M52.5 16.5V19.5M55.5 16.5V19.5M49.5 22.5V25.5M52.5 22.5V25.5M55.5 22.5V25.5M49.5 28.5V31.5M52.5 28.5V31.5M55.5 28.5V31.5M49.5 34.5V37.5M52.5 34.5V37.5M55.5 34.5V37.5M40.5 39V44.9M44 39C44 40.9 42.5 42 40.5 42C38.5 42 37 40.9 37 39C37 37.1 38.5 33.6 40.5 33.6C42.5 33.6 44 37.1 44 39Z'
            stroke='#ffffff'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
    </div>
  );
};

export default Search;
