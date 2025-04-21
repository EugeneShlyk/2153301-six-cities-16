import clsx from 'clsx';
import {SetStateAction, Dispatch, MouseEvent} from 'react';


interface ButtonProp {
  dimension: {
    height: string;
    width: string;
  };
  isFavorite?: boolean;
  isOfferPageBookmark?: boolean;
  setIsFavorite: Dispatch<SetStateAction<boolean | undefined>>; // Типизация функции обновления состояния
}

export default function OfferFavoriteButton({dimension, isFavorite, isOfferPageBookmark, setIsFavorite}: ButtonProp) {
  const {height, width} = dimension;
  const onButtonClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    setIsFavorite((prevState): boolean | undefined => !prevState);
  };
  return (
    <button
      className={clsx('button', {
        'offer__bookmark-button': isOfferPageBookmark,
        'place-card__bookmark-button': !isOfferPageBookmark,
        'place-card__bookmark-button--active': isFavorite,
      })}
      type="button"
      onClick={onButtonClick}
    >
      <svg
        className={clsx({
          'offer__bookmark-icon': isOfferPageBookmark,
          'place-card__bookmark-icon': !isOfferPageBookmark,
        })} width={width} height={height}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">
        {isFavorite ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
}
