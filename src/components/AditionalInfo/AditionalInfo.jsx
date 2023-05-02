import style from './AditionalInfo.module.scss';
import WeekWeather from '../WeekWeather';
import LeftColumn from '../LeftColumn';
import RightColumn from '../RightColumn';
import CenterColumn from '../CenterColumn';
import Location from '../Location';
import sunny from '../../assets/Sunny.png';
import clear from '../../assets/clear.png';
import cloudy from '../../assets/cloudy.png';
import rainy from '../../assets/rainy.png';

const AditionalInfo = ({ additionalInfo, weekly }) => {
  const allAddInfo = additionalInfo ? additionalInfo : null;
  const weatherBg = {
    Sunny: sunny,
    Clear: clear,
    Rain: rainy,
    Clouds: cloudy,
  };

  return (
    <div
      className={style.adInfo}
      style={{
        background: `url(${
          allAddInfo ? weatherBg[allAddInfo.weather[0].main] : weatherBg.Clouds
        }) no-repeat center/cover`,
      }}>
      {/* Info for the week */}
      <WeekWeather weekly={weekly} />

      {/* Cuurent day aditional info */}
      <div className={style.currentDetailed}>
        {/* Left column current day detail info */}
        <LeftColumn leftCol={allAddInfo} />

        {/* Center column current day detail info */}
        <CenterColumn centerCol={allAddInfo} />

        {/* Right column current day detail info */}
        {/* <RightColumn rightCol={allAddInfo} /> */}
      </div>

      {/* Find location btn */}
      <Location />
    </div>
  );
};

export default AditionalInfo;
