// export type AccessRouteProps = {
//   onlyUnAuth?: boolean;
//   children: JSX.Element;
// }

import {AuthorizationStatus} from '@constants';

export interface AccessRouteProps {
  children: JSX.Element;
  status: AuthorizationStatus;
}
