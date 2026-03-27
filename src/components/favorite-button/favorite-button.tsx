import Bookmark from '@components/bookmark/bookmark.tsx';
import {AppRoute, AuthorizationStatus} from '@constants';
import {useNavigate} from 'react-router-dom';
import {userSelector} from '@slices/user';
import {useAppSelector} from '@store/hooks/use-app-selector.ts';
import {useEffect} from 'react';

type Size = 'small' | 'medium' | 'large';

interface FavoriteButtonProps {
  bemBlock?: 'offer' | 'place-card';
  isFavorite?: boolean;
  offerId?: string;
  size?: Size;
}

export default function FavoriteButton({
  bemBlock = 'place-card',
  isFavorite = false,
  offerId,
  size = 'small'
}: FavoriteButtonProps) {

  const userAuthStatus = useAppSelector(userSelector.userAuthStatus);
  console.log(userAuthStatus);
  const navigate = useNavigate();

  const onButtonClick = () => {
    if (userAuthStatus !== AuthorizationStatus.Auth) {
      return navigate(AppRoute.Login);
    }

  };
  return (
    <Bookmark
      isActive={isFavorite}
      extraClass={bemBlock}
      size={size}
      actionClick={onButtonClick}
    />
  );
}
