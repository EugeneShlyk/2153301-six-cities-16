import {JSX} from 'react';
import style from './style.module.scss';
import clsx from 'clsx';

type SpinnerProps = {
  extraClass: string;
}

function Spinner({extraClass}: SpinnerProps): JSX.Element {
  return <div className={clsx(style.spinner, extraClass)}></div>;
  // return <div className={style.spinner}>Loading</div>;
}

export {Spinner};
