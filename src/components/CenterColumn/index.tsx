import style from './CenterColumn.module.scss';

import lungs from '../../assets/lungs.svg';
import thermometr from '../../assets/thermometr.svg';
import drop from '../../assets/drop.svg';
import strokeSun from '../../assets/strokeSun.svg';
import factory from '../../assets/factory.svg';

const index = (): JSX.Element => {
  return (
    <div className={style.centerColumn}>

      {/* Air quality */}
      <div className={style.airQuality}>
        <div className={style.airQualityIcon}>
          <img src={lungs} alt="Air" />
        </div>

        <div className={style.airQualityGrade}>
          <h2>Качество воздуха</h2>
          <div className={style.airQualityGrade}>0.8</div>
        </div>
      </div>

      {/* Top row */}
      <div className={style.topRow}>
        <div className={style.temperature}>
          <div className={style.thermometr}>
            <img src={thermometr} alt="Thermometr" />
          </div>
          <div className={style.temperatureGrade}>
            <p>Ощущается как</p>
            -10<sup>o</sup>
          </div>
        </div>

        <div className={style.chanceOfRain}>
          <div className={style.rain}>
            <img src={drop} alt="Drop" />
          </div>
          <div className={style.rainChance}>
            <p>Вероятность дождя</p>
            <span>30%</span>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className={style.bottomRow}>
        <div className={style.uv}>
          <div className={style.uvSun}>
            <img src={strokeSun} alt="UV index" />
          </div>

          <div className={style.uvGrade}>
            <p>UV индекс</p>
            <span>3</span>
          </div>
        </div>

        <div className={style.co}>
          <div className={style.factory}>
            <img src={factory} alt="Factory" />
          </div>

          <div className={style.coGrade}>
            <p>CO2</p>
            <span>0.9</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
