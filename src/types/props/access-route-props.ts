// export type AccessRouteProps = {
//   onlyUnAuth?: boolean;
//   children: JSX.Element;
// }
import {JSX} from 'react';
import {TAuthorizationStatus} from '@customType/authorization-status.ts';

export interface AccessRouteProps {
  children: JSX.Element;
  status: TAuthorizationStatus;
}
