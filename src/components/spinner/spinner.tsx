import {JSX} from 'react';
import style from './style.module.scss';
import clsx from 'clsx';
import {SPINNER_CLASSES} from '@constants';

type SpinnerProps = {
  extraClass?: string;
}

function Spinner({extraClass = SPINNER_CLASSES.FULL_SCREEN}: SpinnerProps): JSX.Element {
  return (
    <div className={clsx(style[extraClass])}>
      <div className={style['loading-spinner']}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className={style['spinner-text']}>Loading...</p>
    </div>
  );
}

export {Spinner};
