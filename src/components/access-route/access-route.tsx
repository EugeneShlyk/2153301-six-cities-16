import {AppRoute, AuthorizationStatus} from '@constants';
import {Navigate} from 'react-router-dom';

export interface AccessRouteProps {
  children: JSX.Element;
  status: AuthorizationStatus;
}

const createAccessRoute = (statusToCheck: AuthorizationStatus, fallbackPath: AppRoute) =>
  function AccessRoute ({children, status}: AccessRouteProps) {

    switch (status) {
      case statusToCheck:
        return children;
      case 'UNKNOWN':
        return 'Loading...';
      default:
        return <Navigate to={fallbackPath}/>;
    }
  };

const PrivateRoute = createAccessRoute('AUTH', AppRoute.Login);
const PublicRoute = createAccessRoute('NO_AUTH', AppRoute.Root);

export {PublicRoute, PrivateRoute};

const COLORS = ['red', 'white', 'black'];




