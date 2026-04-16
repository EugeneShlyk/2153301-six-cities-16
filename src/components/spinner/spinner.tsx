import {JSX} from 'react';
import style from './style.module.scss'

function Spinner(): JSX.Element {
  return <div className={style.spinner}>Loading</div>;
}

export {Spinner};
