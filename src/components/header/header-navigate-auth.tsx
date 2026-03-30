import {Link} from 'react-router-dom';
import {useActionCreators} from '@store/hooks/use-action-creator.ts';
import {userAction} from '@slices/user';
import {AppRoute} from '@constants';
import {userSelector} from '@slices/user';
import {useAppSelector} from '@store/hooks/use-app-selector.ts';
import {useFavoriteCount} from '../../hooks/use-favorite-count.ts';

export const HeaderNavigateAuth = () => {

  const {logout} = useActionCreators(userAction);
  const user = useAppSelector(userSelector.user);
  const countFavorites = useFavoriteCount();
  return (
    <>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">{user?.email}</span>
          <span className="header__favorite-count">{countFavorites}</span>

        </Link>
      </li>
      <li className="header__nav-item">
        <span className="header__nav-link" onClick={() => logout()}>
          <span className="header__signout">Sign out</span>
        </span>
      </li>
    </>
  );
};
