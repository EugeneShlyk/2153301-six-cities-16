import {AppRoute, AuthorizationStatus} from "@constants";
import {Navigate} from "react-router-dom";

export interface AccessRouteProps {
  children: JSX.Element;
  status: AuthorizationStatus;
}

const createAccessRoute = (statusToCheck: AuthorizationStatus, fallbackPath: AppRoute) =>
  function({children, status}: AccessRouteProps) {
  if (status === 'UNKNOWN') {
    return 'Loading...'
  }

  if (status === statusToCheck) {
    return children
  }

  return <Navigate to={fallbackPath}/>
  };

const PrivateRoute = createAccessRoute('AUTH', AppRoute.Login);

const PublicRoute = createAccessRoute('NO_AUTH', AppRoute.Root);

export {PublicRoute, PrivateRoute};
