import {useActionCreators} from '@store/hooks/use-action-creator';
import {userAction, userSelector} from '@slices/user';
import {Link} from 'react-router-dom';
import {getRandomCity} from '@utils/getRandomCity';
import React, {useMemo, useState} from 'react';
import {AppRoute, ExtraClassButton, RequestStatus, TextButton, TextError} from '@constants';
import ButtonSubmit from '@components/button-submit';
import style from './login-page.module.scss';
import clsx from 'clsx';
import {useAppSelector} from '@store/hooks/use-app-selector.ts';
import {LOCATIONS} from '@constants';

type FormDataT = {
  email: string;
  password: string;
}

function LoginPage(): JSX.Element {
  const [formData, setFormData] =
    useState<FormDataT>({email: '', password: ''});
  const [touched, setTouched] =
    useState<{ email: boolean; password: boolean }>({email: false, password: false});
  const {login} = useActionCreators(userAction);
  const randomCity = useMemo(() => getRandomCity(LOCATIONS), []);
  const requestStatus = useAppSelector(userSelector.requestStatus);
  const isDisabledButton = requestStatus === RequestStatus.Loading;

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData, [evt.target.name]: evt.target.value
    });
  };

  const handleTouched = (event: React.FocusEvent<HTMLInputElement>) => {
    event.preventDefault();
    setTouched({...touched, [event.target.name]: true});
  };

  const re = /^[A-Z0-9._%+-]+@[A-Z0-9-]+(\.[A-Z0-9-]+)*\.[A-Z]{2,}$/i;
  let isCorrectEmailValue = false;
  let isCorrectPasswordValue = false;

  isCorrectEmailValue = re.test(formData.email);

  if (formData.password.length > 1 && /[a-zA-Z]/.test(formData.password) && /[0-9]/.test(formData.password)) {
    isCorrectPasswordValue = true;
  }

  const isValidFormData = isCorrectEmailValue && isCorrectPasswordValue;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Проверка по актуальному стейту в момент отправки
    const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9-]+(\.[A-Z0-9-]+)*\.[A-Z]{2,}$/i.test(formData.email);
    const isPasswordValid = formData.password.length > 1 && /[a-zA-Z]/.test(formData.password) && /[0-9]/.test(formData.password);

    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    login(formData);
  };


  return (
    <div className="page__login-container container">
      <section className="login">
        <h1 className="login__title">Sign in</h1>
        <form
          className="login__form form"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="login__input-wrapper form__input-wrapper">
            <label className="visually-hidden" htmlFor="email">E-mail</label>
            <input
              className="login__input form__input"
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Email"
              value={formData.email}
              onBlur={handleTouched}
              id="email"
              autoComplete="email"
            />
            {touched.email && !isCorrectEmailValue && (
              <span className={clsx(style['login__input-error'])}>
                {TextError.EMAIL_VALIDATION_ERROR}
              </span>
            )}

          </div>
          <div className="login__input-wrapper form__input-wrapper">
            <label className="visually-hidden">Password</label>
            <input
              className="login__input form__input"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              onBlur={handleTouched}
              autoComplete="current-password"
            />
            {touched.password && !isCorrectPasswordValue && (
              <span className={clsx(style['login__input-error'])}>
                {TextError.PASSWORD_VALIDATION_ERROR}
              </span>
            )}
          </div>
          <ButtonSubmit
            extraClass={ExtraClassButton.login}
            isValid={isValidFormData}
            disabled={isDisabledButton}
          >
            {TextButton.signIn}
          </ButtonSubmit>
        </form>
      </section>
      <section className="locations locations--login locations--current">
        <div className="locations__item">
          <Link
            className="locations__item-link"
            to={{pathname: `${AppRoute.Root}`, search: `?city=${randomCity}`}}
          >
            <span>{randomCity}</span>
          </Link>
        </div>
      </section>
    </div>

  );

}

export default LoginPage;
