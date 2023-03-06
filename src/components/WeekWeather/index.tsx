import style from './WeekWeather.module.scss';

import cloud from '../../assets/cloud.svg';
import snowCloud from '../../assets/snowCloud.svg';
import sun from '../../assets/sun.svg';
import rain from '../../assets/rain.svg';
import sunyRain from '../../assets/sunyRain.svg';

const index = (): JSX.Element => {
  return (
    <div className={style.weekWeather}>
      <div className={style.weekShortInfo}>
        <div className={style.weekDay}>Чт</div>
        <div className={style.weekDate}>23.02</div>

        <div className={style.weatherIcon}>
          <img src={cloud} alt="Weather" />
        </div>

        <div className={style.dayTemperature}>
          -6<sup>o</sup>
        </div>

        <div className={style.dayPresure}>
          180
        </div>
      </div>

      <div className={style.weekShortInfo}>
        <div className={style.weekDay}>Пт</div>
        <div className={style.weekDate}>24.02</div>

        <div className={style.weatherIcon}>
          <img src={snowCloud} alt="Weather" />
        </div>

        <div className={style.dayTemperature}>
          -2<sup>o</sup>
        </div>

        <div className={style.dayPresure}>
          176
        </div>
      </div>

      <div className={style.weekShortInfo}>
        <div className={style.weekDay}>Сб</div>
        <div className={style.weekDate}>25.02</div>

        <div className={style.weatherIcon}>
          <img src={cloud} alt="Weather" />
        </div>

        <div className={style.dayTemperature}>
          -0<sup>o</sup>
        </div>

        <div className={style.dayPresure}>
          190
        </div>
      </div>

      <div className={style.weekShortInfo}>
        <div className={style.weekDay}>Вс</div>
        <div className={style.weekDate}>26.02</div>

        <div className={style.weatherIcon}>
          <img src={sun} alt="Weather" />
        </div>

        <div className={style.dayTemperature}>
          1<sup>o</sup>
        </div>

        <div className={style.dayPresure}>
          182
        </div>
      </div>

      <div className={style.weekShortInfo}>
        <div className={style.weekDay}>Пн</div>
        <div className={style.weekDate}>27.02</div>

        <div className={style.weatherIcon}>
          <img src={rain} alt="Weather" />
        </div>

        <div className={style.dayTemperature}>
          -0<sup>o</sup>
        </div>

        <div className={style.dayPresure}>
          190
        </div>
      </div>

      <div className={style.weekShortInfo}>
        <div className={style.weekDay}>Вт</div>
        <div className={style.weekDate}>28.02</div>

        <div className={style.weatherIcon}>
          <img src={sunyRain} alt="Weather" />
        </div>

        <div className={style.dayTemperature}>
          3<sup>o</sup>
        </div>

        <div className={style.dayPresure}>
          165
        </div>
      </div>

      <div className={style.weekShortInfo}>
        <div className={style.weekDay}>Ср</div>
        <div className={style.weekDate}>01.03</div>

        <div className={style.weatherIcon}>
          <img src={snowCloud} alt="Weather" />
        </div>

        <div className={style.dayTemperature}>
          -5<sup>o</sup>
        </div>

        <div className={style.dayPresure}>
          180
        </div>
      </div>
    </div>
  );
};

export default index;
