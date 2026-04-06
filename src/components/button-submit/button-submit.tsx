import {ExtraClassButton} from '@constants';
import {JSX, ReactNode} from 'react';
import clsx from 'clsx';
import style from './button-submit.module.scss';

type ButtonSubmitProps = {
  extraClass: ExtraClassButton;
  isValid: boolean;
  children: ReactNode;
  disabled: boolean;
}

export default function ButtonSubmit({extraClass, isValid, children, disabled}: ButtonSubmitProps): JSX.Element {
  return (
    <button
      className={clsx(
        `${extraClass}__submit form__submit button`, {
          [style['button-disabled']]: !isValid
        })}
      type="submit"
      disabled={disabled}
    >
      {children}
    </button>
  );
}
