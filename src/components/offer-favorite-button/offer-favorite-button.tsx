import clsx from 'clsx';

interface ButtonProp {
  dimension: {
    height: string;
    width: string;
  };
  isFavorite?: boolean;
  isOfferPageBookmark?: boolean;
}

export default function OfferFavoriteButton({dimension, isFavorite, isOfferPageBookmark}: ButtonProp) {
  const {height, width} = dimension;
  return (
    <button
      className={clsx('button', {
        'offer__bookmark-button': isOfferPageBookmark,
        'place-card__bookmark-button': !isOfferPageBookmark,
        'place-card__bookmark-button--active': isFavorite,
      })}
      type="button"
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
