import {useActionCreators} from '@store/hooks/use-action-creator';
import {userAction} from '@slices/user';
import {Link} from 'react-router-dom';
import {getRandomCity} from '@utils/getRandomCity';
import React, {useMemo, useState} from 'react';
import {AppRoute, ExtraClassButton, TextButton, textError} from '@constants';
import {toast} from 'react-toastify';
import ButtonSubmit from '@components/button-submit';

type FormDataT = {
  email: string;
  password: string;
}

function LoginPage(): JSX.Element {
  const [formData, setFormData] = useState<FormDataT>({email: '', password: ''});
  const {login} = useActionCreators(userAction);
  const cityForPage = useMemo(() => getRandomCity(), []);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData, [evt.target.name]: evt.target.value
    });
  };

  const re = /^[A-Z0-9._%+-]+@[A-Z0-9-]+(\.[A-Z0-9-]+)*\.[A-Z]{2,}$/i;
  let correctEmailValue = false;
  let correctPasswordValue = false;

  if (re.test(formData.email)) {
    correctEmailValue = true;
  }

  if (formData.password.length > 1) {
    correctPasswordValue = true;
  }

  const isValid = correctEmailValue && correctPasswordValue;

  const handleButtonSubmitClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!correctEmailValue || !correctPasswordValue) {
      if (!correctEmailValue) {
        toast.error(textError.EMAIL_VALIDATION_ERROR);
      }
      if (!correctPasswordValue) {
        toast.error(textError.PASSWORD_VALIDATION_ERROR);
      }
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(formData);
  };

  return (
    <div className="page page--gray page--login">
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" onClick={handleSubmit} method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />
              </div>
              {/*<button className="login__submit form__submit button" type="submit" onClick={handleButtonSubmitClick}>Sign in</button>*/}
              <ButtonSubmit extraClass={ExtraClassButton.login} isValid={isValid}>
                {TextButton.signIn}
              </ButtonSubmit>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to={{pathname: `${AppRoute.Root}`, search: `?city=${cityForPage}`}}
              >
                <span>{cityForPage}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>

  );

}

export default LoginPage;
