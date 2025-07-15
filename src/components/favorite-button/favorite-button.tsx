import Bookmark from '@components/bookmark/bookmark.tsx';
import {AppRoute, AuthorizationStatus} from '@constants';
import {useNavigate} from 'react-router-dom';

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

  const userStatus = AuthorizationStatus.Auth;
  const navigate = useNavigate();

  const onButtonClick = () => {
    if (userStatus !== AuthorizationStatus.Auth) {
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
