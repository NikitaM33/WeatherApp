import style from './RightColumn.module.scss';

const index = (): JSX.Element => {
  return (
    <div className={style.rightColumn}>
      <div className={style.wind}>
        Сила ветра <br />
        <span>9 М/с</span>
      </div>

      <hr />

      <div className={style.presure}>
        Давление <br />
        <span>169 мрс</span>
      </div>

      <hr />

      <div className={style.humidity}>
        Влажность <br />
        <span>80%</span>
      </div>
    </div>
  );
};

export default index;
