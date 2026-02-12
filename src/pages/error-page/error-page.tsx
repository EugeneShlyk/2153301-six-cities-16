import clsx from 'clsx';
import style from './error-page.module.scss';
import {Link, useRouteError} from 'react-router-dom';
import {AppRoute} from '@constants';

function ErrorPage(): JSX.Element {
  const error = useRouteError();

  let message = '' +
    '404. Page not found';

  if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--login">
        <div className={clsx(style.error, 'container')}>
          <h1 className={style.error__title}>{message}</h1>
          <Link to={AppRoute.Root}>
            Вернуться на главную
          </Link>
        </div>
      </main>
    </div>
  );
}

export default ErrorPage;
