import {JSX} from 'react';

type AuthGateProps = {
  children: JSX.Element;
};

export default function AuthGate({children}: AuthGateProps): JSX.Element {
  const authStatus = useAppSelector(userSelector.authStatus);
  // Если статус еще не проверен — показываем фулл-скрин спиннер
  if (authStatus === AuthorizationStatus.Unknown) {
    return <Spinner extraClass={SPINNER_CLASSES.FULL_SCREEN} />;
  }

  // Как только статус стал Auth или NoAuth — показываем приложение
  return children;
}
