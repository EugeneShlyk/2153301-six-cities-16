import {AppRoute} from '@constants';
import {Link} from 'react-router-dom';
import clsx from 'clsx';

export default function Logo({isDisabledLogo}: LogoProps): JSX.Element {
  const className = clsx('header__logo-link', isDisabledLogo && 'header__logo-link--active');
  const content = <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>;

  if (isDisabledLogo) {
    return <div className={className}>{content}</div>;
  }
  return <Link className={className} to={AppRoute.Root}>{content}</Link>;
}
