import style from './LeftColumn.module.scss';

const LeftColumn = ({ leftCol }) => {
  return (
    <div className={style.leftColumn}>
      <div className={style.visibility}>
        Видимость <br />
        <span>{leftCol && leftCol.visibility / 1000}</span> Км
      </div>

      <hr />

      {/* <div className={style.rise}>
        Порывы ветра <br />
        <span>{leftCol.wind && leftCol.wind.gust}</span>
      </div> */}
    </div>
  );
};

export default LeftColumn;
