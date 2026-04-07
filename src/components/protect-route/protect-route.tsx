import {useAuth} from '../../hooks/use-auth.ts';
import {Navigate, useLocation} from 'react-router-dom';
import {useAppSelector} from '@store/hooks/use-app-selector.ts';
import {userSelector} from '@slices/user';
import {AppRoute, AuthorizationStatus} from '@constants';
import Spinner from '@components/spinner';

type ProtectRouteProps = {
  onlyUnAuth?: boolean;
  children?: JSX.Element;
}
type LocationState = {
  from?: {
    pathname: string;
  };
}

export default function ProtectRoute({onlyUnAuth, children}: ProtectRouteProps) {
  const {isAuth} = useAuth();
  const location = useLocation();
  const state = location.state as LocationState;
  const authStatus = useAppSelector(userSelector.authStatus);

  const isGuestPage = onlyUnAuth;
  const isProtectPage = !onlyUnAuth;

  if (authStatus === AuthorizationStatus.Unknown) {
    return <Spinner></Spinner>;
  }

  if (isAuth && isGuestPage) {
    const from = state?.from || {pathname: AppRoute.Root};
    return <Navigate to={from}/>;
  }

  if (!isAuth && isProtectPage) {
    return <Navigate to={AppRoute.Login} state={{from: location}}/>;
  }

  return children;
}
