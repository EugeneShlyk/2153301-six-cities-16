import {Navigate} from "react-router-dom";
import {AppRoute, type AuthorizationStatus} from "@constants";

interface AccessRouteProps {
  children: JSX.Element;
  status: AuthorizationStatus
}

function PrivateRoute({children, status}: AccessRouteProps) {
  return status === 'AUTH' ? children : <Navigate to={AppRoute.Login}/>
}

function PublicRoute({children, status}: AccessRouteProps) {
  return status === 'NO_AUTH' ? children: <Navigate to={AppRoute.}/>
}
