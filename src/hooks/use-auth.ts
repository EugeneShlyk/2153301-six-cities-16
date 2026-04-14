import {AuthorizationStatus} from '@constants';
import {useAppSelector} from '@store/hooks/use-app-selector.ts';
import {userSelector} from '@slices/user';

export const useAuth = () => {
  const status = useAppSelector(userSelector.authStatus);

  return {
    isAuth: status === AuthorizationStatus.Auth,
    // isLoading: status === AuthorizationStatus.Unknown,
  };
};
