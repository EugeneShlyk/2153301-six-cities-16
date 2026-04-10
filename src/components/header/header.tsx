import Logo from '@components/logo';
import {useAuth} from '../../hooks/use-auth.ts';
import {HeaderNavigateAuth} from '@components/header/header-navigate-auth.tsx';
import {HeaderNavigationUnAuth} from '@components/header/header-navigation-un-auth.tsx';
import SearchInput from '@components/search-input';

type HeaderProps = {
  isDisabledLogo?: boolean;
  shouldRenderUser?: boolean;
  isRenderInputSearch?: boolean;
  setSearchQuery: (value: string) => void;
}

function Header({isDisabledLogo, shouldRenderUser, isRenderInputSearch, setSearchQuery}: HeaderProps): JSX.Element {
  const {isAuth} = useAuth();
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo isDisabledLogo={isDisabledLogo}/>
          </div>
          {isRenderInputSearch && <SearchInput oneSearch={setSearchQuery}/>}
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
