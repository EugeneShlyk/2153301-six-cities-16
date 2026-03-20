import {ExtraClassButton} from '@constants';
import {JSX, ReactNode} from 'react';
import clsx from 'clsx';

type ButtonSubmitProps = {
  extraClass: ExtraClassButton;
  isValid: boolean;
  children: ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ButtonSubmit({extraClass, isValid, children}: ButtonSubmitProps): JSX.Element {
  return (
    <>
      <button
        className={clsx(`${extraClass}__submit form__submit button`)}
        type="submit"
        disabled={!isValid}
      >
        {children}
      </button>
      {/*<button*/}
      {/*  className="login__submit form__submit button"*/}
      {/*  type="submit"*/}
      {/*>*/}
      {/*  Sign in*/}
      {/*</button>*/}
    </>
  );
}
