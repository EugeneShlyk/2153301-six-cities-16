import {JSX} from 'react';
import {useAppSelector} from '@store/hooks/use-app-selector.ts';
import {userSelector} from '@slices/user';
import {AuthorizationStatus} from '@constants';
import Spinner from '@components/spinner';
import {SPINNER_CLASSES} from '@constants';

type AuthGateProps = {
  children: JSX.Element;
};

export default function AuthGate({children}: AuthGateProps): JSX.Element {
  const authStatus = useAppSelector(userSelector.authStatus);

  if (authStatus === AuthorizationStatus.Unknown) {
    return <Spinner extraClass={SPINNER_CLASSES.FULL_SCREEN} />;
  }

  return children;
}
