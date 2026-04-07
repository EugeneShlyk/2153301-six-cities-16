import Bookmark from '@components/bookmark/bookmark.tsx';
import {AppRoute, AuthorizationStatus} from '@constants';
import {useNavigate} from 'react-router-dom';
import {userSelector} from '@slices/user';
import {useAppSelector} from '@store/hooks/use-app-selector.ts';
import {useActionCreators} from '@store/hooks/use-action-creator.ts';
import {favoritesAction} from '@slices/favorites';

type Size = 'small' | 'medium' | 'large';

interface FavoriteButtonProps {
  bemBlock?: 'offer' | 'place-card';
  isFavorite?: boolean;
  offerId: string;
  size?: Size;
}

export default function FavoriteButton({
  bemBlock = 'place-card',
  isFavorite = false,
  offerId,
  size = 'small'
}: FavoriteButtonProps) {

  const authStatus = useAppSelector(userSelector.authStatus);
  const navigate = useNavigate();
  const {changeFavorites} = useActionCreators(favoritesAction);

  const onButtonClick = () => {
    if (authStatus !== AuthorizationStatus.Auth) {
      return navigate(AppRoute.Login);
    }
    changeFavorites({offerId, status: Number(!isFavorite)});
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
