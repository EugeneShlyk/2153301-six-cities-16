import clsx from 'clsx';

type ButtonProp = {
  height: string;
  weight: string;
  isFavorite?: boolean;
  isOfferPageBookmark?: boolean;
}

export default function OfferFavoriteButton({height, weight, isFavorite, isOfferPageBookmark}: ButtonProp) {
  return (
    <button className={clsx('button', {
      'offer__bookmark-button': isOfferPageBookmark,
      'place-card__bookmark-button': !isOfferPageBookmark,
    })} type="button">
      <svg className={clsx({
        'offer__bookmark-icon': isOfferPageBookmark,
        'place-card__bookmark-icon': !isOfferPageBookmark,
      })} width={weight} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">
        {isFavorite ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
}
