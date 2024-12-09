import {Navigate} from "react-router-dom";
import {AppRoute} from "@constants";
// import {AccessRouteProps} from "@customType/props/access-route-props";

export default function PublicRoute({children, status}: AccessRouteProps) {
  return status === 'NO_AUTH' ? children: <Navigate to={AppRoute.Root}/>
}
