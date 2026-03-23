import {ExtraClassButton} from '@constants';
import {JSX, ReactNode} from 'react';
import clsx from 'clsx';
import style from './button-submit.module.scss';

type ButtonSubmitProps = {
  extraClass: ExtraClassButton;
  isValid: boolean;
  children: ReactNode;
}

export default function ButtonSubmit({extraClass, isValid, children}: ButtonSubmitProps): JSX.Element {
  return (
    <button
      className={clsx(
        `${extraClass}__submit form__submit button`, !isValid && style['button-disabled'])}
      type="submit"
    >
      {children}
    </button>
  );
}
