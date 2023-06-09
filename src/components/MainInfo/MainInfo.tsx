import React from 'react';

import style from './MainInfo.module.scss';

const MainInfo = (): JSX.Element => {
  return (
    <div className={style.mainInfo}>
      {/* Current weather */}
      <div className={style.todayWeather}>
        <div className={style.infoCircle}>
          {/* Cloud */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26 8C25.9375 8 25.875 8.0625 25.875 8.0625C25.9375 7.6875 26 7.375 26 7C26 4.25 23.75 2 21 2C19.4375 2 18.0625 2.75 17.1875 3.8125C16 1.5625 13.6875 0 11 0C7.125 0 4 3.1875 4 7C4 7.5 4 7.9375 4.125 8.375C1.6875 9.125 0 11.375 0 14C0 17.3125 2.6875 20 6 20H26C29.3125 20 32 17.3125 32 14C32 10.6875 29.3125 8 26 8ZM23 29C23 30.6875 24.3125 32 26 32C27.625 32 29 30.6875 29 29C29 27.375 25.9375 23.0625 25.9375 23.0625C25.9375 23.0625 23 27.375 23 29ZM3 29C3 30.6875 4.3125 32 6 32C7.625 32 9 30.6875 9 29C9 27.375 5.9375 23.0625 5.9375 23.0625C5.9375 23.0625 3 27.375 3 29ZM13 29C13 30.6875 14.3125 32 16 32C17.625 32 19 30.6875 19 29C19 27.375 15.9375 23.0625 15.9375 23.0625C15.9375 23.0625 13 27.375 13 29Z" fill="#CCCCCC" />
          </svg>

          {/* Wind */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 12H22C25.25 12 28 9.3125 28 6C28 2.75 25.25 0 22 0H20C18.875 0 18 0.9375 18 2C18 3.125 18.875 4 20 4H22C23.0625 4 24 4.9375 24 6C24 7.125 23.0625 8 22 8H2C0.875 8 0 8.9375 0 10C0 11.125 0.875 12 2 12ZM10 20H2C0.875 20 0 20.9375 0 22C0 23.125 0.875 24 2 24H10C11.0625 24 12 24.9375 12 26C12 27.125 11.0625 28 10 28H8C6.875 28 6 28.9375 6 30C6 31.125 6.875 32 8 32H10C13.25 32 16 29.3125 16 26C16 22.75 13.25 20 10 20ZM26 14H2C0.875 14 0 14.9375 0 16C0 17.125 0.875 18 2 18H26C27.0625 18 28 18.9375 28 20C28 21.125 27.0625 22 26 22H24C22.875 22 22 22.9375 22 24C22 25.125 22.875 26 24 26H26C29.25 26 32 23.3125 32 20C32 16.75 29.25 14 26 14Z" fill="#CCCCCC" />
          </svg>
        </div>

        <div className={style.moreInfo}>
          <span>8Км</span>
          <span>Дождь | Ветер</span>
        </div>
      </div>

      {/* Current temperature */}
      <div className={style.todayTemperature}>
        <h1>-2<sup>o</sup></h1>
        <div className={style.currentCity}>
          Санкт-Петербург
          <span>
            <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.75 0.749999C1.04688 0.749999 0.695314 1.57031 1.20313 2.07812L6.20313 7.07812C6.51563 7.39062 7.02344 7.39062 7.33594 7.07812L12.3359 2.07812C12.8438 1.57031 12.4922 0.75 11.7891 0.75L1.75 0.749999Z" fill="#ADADAD" />
            </svg>
          </span>
        </div>
      </div>

      {/* Current humidity */}
      <div className={style.todayHumidity}>
        <div className={style.infoCircle}>
          <svg width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.25 22.5H23.4375C25.1562 24.0625 27.4219 25 30 25C32.5 25 34.7656 24.0625 36.4844 22.5H41.25C46.0156 22.5 50 18.5938 50 13.75C50 8.98438 46.0156 5 41.25 5C39.8438 5 38.5156 5.39062 37.3438 6.01562C35.3906 2.42188 31.7188 0 27.5 0C24.2969 0 21.4062 1.40625 19.375 3.51562C17.2656 1.40625 14.4531 0 11.25 0C5 0 0 5.07812 0 11.25C0 17.5 5 22.5 11.25 22.5ZM10.625 36.25H1.79688C0.78125 36.25 0 37.1094 0 38.125C0 39.0625 0.78125 40 1.79688 40H10.625C11.6406 40 12.5 39.2188 12.5 38.125C12.5 37.1094 11.6406 36.25 10.625 36.25ZM48.125 28.75H6.875C5.78125 28.75 5 29.6094 5 30.625C5 31.5625 5.78125 32.5 6.79688 32.5H48.0469C49.0625 32.5 49.9219 31.7188 49.9219 30.7031C49.9219 29.7656 49.1406 28.75 48.125 28.75ZM43.125 36.25H18.0469C17.0312 36.25 16.25 37.1094 16.25 38.125C16.25 39.0625 17.0312 40 18.0469 40H43.125C44.1406 40 45 39.2188 45 38.2031C45 37.2656 44.1406 36.25 43.125 36.25Z" fill="#CCCCCC" />
          </svg>
        </div>

        <div className={style.moreInfo}>
          <span>68%</span>
          <span>Влажность</span>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
