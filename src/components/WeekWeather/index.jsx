import style from './WeekWeather.module.scss';
import sun from '../../assets/sun.svg';
import rain from '../../assets/rain.svg';
import cloud from '../../assets/cloud.svg';

const index = ({ weekly }) => {
  const weatherIcon = {
    Sunny: sun,
    Clear: sun,
    Rain: rain,
    Clouds: cloud,
  };

  return (
    <div className={style.weekWeather}>
      {weekly &&
        weekly.map((forecast) => {
          const date = forecast.dt_txt.slice(5, 10).split('-').reverse().join('.');

          return (
            <div key={forecast.dt} className={style.weekShortInfo}>
              {/* <div className={style.weekDay}>Чт</div> */}
              <div className={style.weekDate}>{date}</div>

              <div className={style.weatherIcon}>
                <img src={weatherIcon[forecast.weather[0].main]} alt='Weather' />
              </div>

              <div className={style.dayTemperature}>
                {forecast.main.temp}<sup>o</sup>
              </div>

              <div className={style.dayPresure}>{forecast.main.pressure}</div>
            </div>
          );
        })}
    </div>
  );
};

export default index;
