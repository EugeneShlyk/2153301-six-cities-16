import clsx from 'clsx';
import {SetStateAction, Dispatch, MouseEvent} from 'react';
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
    <Bookmark isActive={isFavorite} extraClass={bemBlock} size={size} actionClick={onButtonClick}/>
    // <button
    //   className={clsx('button', {
    //     'offer__bookmark-button': isOfferPageBookmark,
    //     'place-card__bookmark-button': !isOfferPageBookmark,
    //     'place-card__bookmark-button--active': isFavorite,
    //   })}
    //   type="button"
    //   onClick={onButtonClick}
    // >
    //   <svg
    //     className={clsx({
    //       'offer__bookmark-icon': isOfferPageBookmark,
    //       'place-card__bookmark-icon': !isOfferPageBookmark,
    //     })} width={width} height={height}
    //   >
    //     <use xlinkHref="#icon-bookmark"></use>
    //   </svg>
    //   <span className="visually-hidden">
    //     {isFavorite ? 'In bookmarks' : 'To bookmarks'}
    //   </span>
    // </button>
  );
}
