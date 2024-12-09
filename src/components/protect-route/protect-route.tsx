// import {AppRoute} from '@constants';
// import {Navigate, useLocation} from 'react-router-dom';
// import {AccessRouteProps} from '@customType/props/protect-route-props';
//
// export default function ProtectRoute({onlyUnAuth, children}: AccessRouteProps) {
//   const user = true;
//   const location = useLocation();
//
//   if (user && onlyUnAuth) {
//     const from = location.state?.from || {pathname: '/'};
//     return <Navigate to={from}/>;
//   }
//
//   if (!user && !onlyUnAuth) {
//     return <Navigate to={AppRoute.Login} state={{from: location}}/>;
//   }
//
//   return children;
// }

import {Navigate} from "react-router-dom";
import {AppRoute, type AuthorizationStatus} from "@constants";
import {AccessRouteProps} from "@customType/props/access-route-props";


export default function ProtectRoute({children, status}: AccessRouteProps) {
  return status === 'AUTH' ? children : <Navigate to={AppRoute.Login}/>
}

