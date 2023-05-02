import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SUNNY_BG, CLEAR_BG, MAIN_BG } from '../../constants';
import { searchLocation } from '../../redux/actions/serachLocation';
import { weeklyWeather } from '../../redux/actions/weeklyWeather';
import style from './Main.module.scss';
import Search from '../Search/Search';
import MainInfo from '../MainInfo/MainInfo';
import AditionalInfo from '../AditionalInfo/AditionalInfo';

const Main = () => {
  const dispatch = useDispatch();
  const { currentWeather, weeklyForecast } = useSelector(
    ({ weatherState }) => weatherState
  );
  const allInfo = currentWeather ? currentWeather : null;
  const weekly = weeklyForecast ? weeklyForecast : null;
  const weatherTopBg = {
    Sunny: SUNNY_BG,
    Clear: CLEAR_BG,
    Rain: MAIN_BG,
    Clouds: MAIN_BG,
  };

  useEffect(() => {
    dispatch(searchLocation());
  }, []);

  useEffect(() => {
    dispatch(weeklyWeather());
  }, []);

  return (
    <div className={style.main}>
      <div className='wrapper'>
        <div
          className={style.mainContainer}
          style={{
            background: `${
              allInfo
                ? weatherTopBg[allInfo.weather[0].main]
                : weatherTopBg.Clear
            }`,
          }}>
          {/* Search */}
          <Search />

          {/* Main info */}
          <MainInfo curInfo={allInfo} />

          {/* Additional weather info */}
          <AditionalInfo additionalInfo={allInfo} weekly={weekly} />
        </div>
      </div>
    </div>
  );
};

export default Main;
