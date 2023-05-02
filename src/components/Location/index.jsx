import { useSelector, useDispatch } from 'react-redux';

import style from './Location.module.scss';
import { searchLocation } from '../../redux/actions/serachLocation';

const Location = () => {
  const dispatch = useDispatch();

  const searchLoaction = () => {
    console.log('Searching...');

    dispatch(searchLocation());
  }

  return (
    <div className={style.location}>
      <button onClick={searchLoaction} className={style.searchLocation}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.75 20C13.75 16.5625 16.4844 13.75 20 13.75C23.4375 13.75 26.25 16.5625 26.25 20C26.25 23.5156 23.4375 26.25 20 26.25C16.4844 26.25 13.75 23.5156 13.75 20ZM20 0C21.3281 0 22.5 1.17188 22.5 2.5V5.23438C28.75 6.32812 33.6719 11.25 34.7656 17.5H37.5C38.8281 17.5 40 18.6719 40 20C40 21.4062 38.8281 22.5 37.5 22.5H34.7656C33.6719 28.8281 28.75 33.75 22.5 34.8438V37.5C22.5 38.9062 21.3281 40 20 40C18.5938 40 17.5 38.9062 17.5 37.5V34.8438C11.1719 33.75 6.25 28.8281 5.15625 22.5H2.5C1.09375 22.5 0 21.4062 0 20C0 18.6719 1.09375 17.5 2.5 17.5H5.15625C6.25 11.25 11.1719 6.32812 17.5 5.23438V2.5C17.5 1.17188 18.5938 0 20 0ZM10 20C10 25.5469 14.4531 30 20 30C25.4688 30 30 25.5469 30 20C30 14.5312 25.4688 10 20 10C14.4531 10 10 14.5312 10 20Z" fill="#0C3041" />
        </svg>
      </button>
    </div>
  );
};

export default Location;
