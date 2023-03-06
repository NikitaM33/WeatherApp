import style from './LeftColumn.module.scss';

const LeftColumn = (): JSX.Element => {
  return (
    <div className={style.leftColumn}>
      <div className={style.visibility}>
        Видимость <br />
        <span>10 Км</span>
      </div>

      <hr />

      <div className={style.rise}>
        Восход / Закат <br />
        <span>8:30 / 19:43</span>
      </div>
    </div>
  );
};

export default LeftColumn;
