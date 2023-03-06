import style from './AditionalInfo.module.scss';
import WeekWeather from '../WeekWeather';
import LeftColumn from '../LeftColumn';
import RightColumn from '../RightColumn';
import CenterColumn from '../CenterColumn';
import Location from '../Location';

const AditionalInfo = (): JSX.Element => {
  return (
    <div className={style.adInfo}>
      {/* Info for the week */}
      <WeekWeather />

      {/* Cuurent day aditional info */}
      <div className={style.currentDetailed}>

        {/* Left column current day detail info */}
        <LeftColumn />

        {/* Center column current day detail info */}
        <CenterColumn />

        {/* Right column current day detail info */}
        <RightColumn />
      </div>

      {/* Find location btn */}
      <Location />
    </div>
  );
};

export default AditionalInfo;
