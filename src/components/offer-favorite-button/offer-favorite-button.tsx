type ButtonProp = {
  height: string;
  weight: string;
  isFavorite?: boolean;
}

export default function OfferFavoriteButton({height, weight, isFavorite}: ButtonProp) {
  return (
    <button className="place-card__bookmark-button button" type="button">
      <svg className="place-card__bookmark-icon" width={weight} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">
        {isFavorite ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
}
