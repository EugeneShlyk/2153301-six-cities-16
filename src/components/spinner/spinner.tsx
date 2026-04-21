import {JSX} from 'react';
import style from './style.module.scss';
import clsx from 'clsx';

type SpinnerProps = {
  extraClass: string;
}

// function Spinner({extraClass}: SpinnerProps): JSX.Element {
//   return <div className={clsx(style.spinner, extraClass)}>...Loading</div>;
//
//
// }

function Spinner({extraClass}: SpinnerProps): JSX.Element {
  return (
    <div className={style['spinner-wrapper']}>
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
