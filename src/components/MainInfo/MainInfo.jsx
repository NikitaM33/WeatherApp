import style from './MainInfo.module.scss';
import sun from '../../assets/sun.svg';
import rain from '../../assets/rain.svg';
import cloud from '../../assets/cloud.svg';
import thermometr from '../../assets/thermometr.svg';

const MainInfo = ({ curInfo }) => {
  const condition = {
    Sunny: 'Солнечно',
    Clear: 'Ясно',
    Rain: 'Дождь',
    Clouds: 'Пасмурно',
  };

  const weatherIcon = {
    Sunny: sun,
    Clear: sun,
    Rain: rain,
    Clouds: cloud,
  };

  return (
    <div className={style.mainInfo}>
      {/* Current weather */}
      <div className={style.todayWeather}>
        <div className={style.infoCircle}>
          {curInfo && (
            <img src={weatherIcon[curInfo.weather[0].main]} alt='Weather' />
          )}
        </div>

        <div className={style.moreInfo}>
          {curInfo && condition[curInfo.weather[0].main]}
        </div>
      </div>

      {/* Temperature */}
      <div className={style.todayTemperature}>
        {/* Current temperature */}
        <div className={style.currentTemp}>
          <h1>
            {curInfo && curInfo.main.temp}
            <sup>o</sup>
          </h1>
          {/* MaxMin per day temperature */}
          <div className={style.perDayTemp}>
            <div className={style.minTemp}>
              <span>min</span> {curInfo && curInfo.main.temp_min}
              <sup>o</sup>
            </div>
            <div className={style.maxTemp}>
              <span>max</span> {curInfo && curInfo.main.temp_max}
              <sup>o</sup>
            </div>
          </div>
        </div>
      </div>

      {/* Current humidity */}
      <div className={style.todayHumidity}>
        <div className={style.infoCircle}>
          <img src={thermometr} alt='Air' />
        </div>

        <div className={style.moreInfo}>
          Ощущается
          <span>{curInfo && curInfo.main.feels_like}</span>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
