import {AppRoute} from '@constants';
import {Navigate} from 'react-router-dom';
import {TAuthorizationStatus} from '@customType/authorization-status.ts';

export interface AccessRouteProps {
  children: JSX.Element;
  status: TAuthorizationStatus;
}

const createAccessRoute = (statusToCheck: TAuthorizationStatus, fallbackPath: AppRoute) =>
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

// const COLORS = ['red', 'white', 'black'];
