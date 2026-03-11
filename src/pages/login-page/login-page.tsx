import {useActionCreators} from '@store/hooks/use-action-creator.ts';
import {userAction} from '@slices/user';
import {Link} from 'react-router-dom';
import {getRandomCity} from '@utils/getRandomCity.ts';
import {useMemo, useState} from 'react';
import {AppRoute} from '@constants';
import React from 'react';

type FormDataT = {
  email: string;
  password: string;
}

function LoginPage(): JSX.Element {
  const [formData, setFormData] = useState<FormDataT>({email: '', password: ''});
  const {login} = useActionCreators(userAction);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData, [evt.target.name]: evt.target.value
    });
  };

  const handleSubmit = (event: Event) => {
    event.preventDefault();

  };

  const cityForPage = useMemo(() => getRandomCity(), []);
  return (
    <div className="page page--gray page--login">
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password"
                       required/>
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
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
