import style from './Main.module.scss';

import Search from '../Search/Search';
import DayShortInfo from '../DayShortInfo/DayShortInfo';
import MainInfo from '../MainInfo/MainInfo';
import AditionalInfo from '../AditionalInfo/AditionalInfo';

const Main = (): JSX.Element => {
  return (
    <div className={style.main}>
      <div className="wrapper">
        <div className={style.mainContainer}>
          {/* Search */}
          <Search />

          {/* Through a day */}
          <DayShortInfo />

          {/* Main info */}
          <MainInfo />

          {/* Additional weather info */}
          <AditionalInfo />
        </div>
      </div>
    </div >
  );
};

export default Main;
