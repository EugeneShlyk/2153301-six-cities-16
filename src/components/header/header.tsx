import Logo from '@components/logo';
import {useAuth} from '../../hooks/use-auth.ts';
import {HeaderNavigateAuth} from '@components/header/header-navigate-auth.tsx';
import {HeaderNavigationUnAuth} from '@components/header/header-navigation-un-auth.tsx';

type HeaderProps = {
  isDisabledLogo?: boolean;
  shouldRenderUser?: boolean;
}

function Header({isDisabledLogo, shouldRenderUser}: HeaderProps): JSX.Element {
  const {isAuth} = useAuth();
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo isDisabledLogo={isDisabledLogo}/>
          </div>
          {shouldRenderUser &&
            <nav className="header__nav">
              <ul className="header__nav-list">
                {isAuth ? <HeaderNavigateAuth/> : <HeaderNavigationUnAuth/>}
              </ul>
            </nav>}
        </div>
      </div>
    </header>
  );
}

export default Header;
