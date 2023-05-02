import style from './CenterColumn.module.scss';
import thermometr from '../../assets/thermometr.svg';

const index = ({ centerCol }) => {
  return (
    <div className={style.centerColumn}>
      {/* Air quality */}
      <div className={style.airQuality}>
        {/* <div className={style.airQualityIcon}>
          <img src={thermometr} alt='Air' />
        </div> */}

        <div className={style.airQualityGrade}>
          <h2>hPa</h2>
          <div className={style.airQualityGrade}>
            <span>{centerCol && centerCol.main.pressure}</span>
          </div>
        </div>
      </div>

      {/* Top row */}
      <div className={style.topRow}>
        <div className={style.temperature}>
          <div className={style.temperatureGrade}>
            <p>Описание погоды</p>
            <span>{centerCol && centerCol.weather[0].description}</span>
          </div>
        </div>

        <div className={style.chanceOfRain}>
          <div className={style.rainChance}>
            <p>Сила ветра</p>
            <span>{centerCol && centerCol.wind.speed}</span> Км/ч
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className={style.bottomRow}>
        <div className={style.uv}>
          <div className={style.uvGrade}>
            <p>Влажность</p>
            <span>{centerCol && centerCol.main.humidity}</span> %
          </div>
        </div>

        <div className={style.co}>
          <div className={style.coGrade}>
            <p>Облачность</p>
            <span>{centerCol && centerCol.clouds.all}</span> %
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
