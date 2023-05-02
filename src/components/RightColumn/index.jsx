import style from './RightColumn.module.scss';

const index = ({ rightCol }) => {
  const sunrise = rightCol && new Date(rightCol.sys.sunrise).toLocaleString('ru-RU');
  const sunset = rightCol && new Date(rightCol.sys.sunset).toLocaleString('ru-RU');

  return (
    <div className={style.rightColumn}>
      {/* <div className={style.wind}>
        Сила ветра <br />
        <span>9 М/с</span>
      </div> */}

      <hr />

      <div className={style.presure}>
        Восход <br />
        <span>{sunrise}</span>
      </div>

      <hr />

      <div className={style.humidity}>
        Закат <br />
        <span>{sunset}</span>
      </div>
    </div>
  );
};

export default index;
