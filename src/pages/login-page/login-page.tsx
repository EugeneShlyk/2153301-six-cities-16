import {useActionCreators} from '@store/hooks/use-action-creator.ts';
import {userAction} from '@slices/user';
import {Link} from 'react-router-dom';
import {getRandomCity} from '@utils/getRandomCity.ts';
import {useMemo, useState} from 'react';
import {AppRoute, textError} from '@constants';
import React from 'react';
import {toast} from 'react-toastify';

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

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    if (!correctEmailValue || !correctPasswordValue) {
      if (!correctEmailValue) {
        toast.error(textError.EMAIL_VALIDATION_ERROR);
      }
      if (!correctPasswordValue) {
        toast.error(textError.PASSWORD_VALIDATION_ERROR);
      }
      return;
    }
    login(formData);
  };

  return (
    <div className="page page--gray page--login">
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post">
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
              <button className="login__submit form__submit button" type="submit" onClick={handleSubmit}>Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={`${AppRoute.Root}?city=${cityForPage}`}>
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
