import React from 'react';

import style from './DayShortInfo.module.scss';

const DayShortInfo = (): JSX.Element => {
  return (
    <div className={style.throughADay}>
      <div className={style.shortInfo}>
        Пасмурно | 8:00 | -3 <sup>o</sup>
      </div>

      <div className={style.shortInfo}>
        Ясно | 12:00 | -1 <sup>o</sup>
      </div>

      <div className={style.shortInfo}>
        Снег | 18:00 | -2 <sup>o</sup>
      </div>
    </div>
  );
};

export default DayShortInfo;
