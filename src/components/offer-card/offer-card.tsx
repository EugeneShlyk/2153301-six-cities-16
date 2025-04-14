import {AppRoute, smallButtonFavoriteDimension} from '@constants';
import {OfferPreview} from '@customType/offer';
import {getRatingWidth} from '@utils/offer';
import clsx from 'clsx';
import {Link} from 'react-router-dom';
import OfferFavoriteButton from '@components/offer-favorite-button';

const smallCardDimensions = {
  width: '150',
  height: '110'
};

const largeCardDimensions = {
  width: '260',
  height: '200'
};

type Size = 'small' | 'medium' | 'large';
type CardType = 'favorites' | 'cities';
type OfferCardProps = {
  offer: OfferPreview;
  size: Size;
  variant?: CardType;
  onOverCard?: (cardId: string) => void;
};

function getImageSize(size: Size) {
  if (size) {
    if (size === 'small') {
      return smallCardDimensions;
    }
    if (size === 'large') {
      return largeCardDimensions;
    }
  }
}


function OfferCard({
  offer,
  variant,
  size,
  onOverCard
}: OfferCardProps): JSX.Element {
  const isFavorite = offer?.isFavorite;
  const onMouseEnter = () => {
    if (onOverCard) {
      onOverCard(offer.id);
    }
  };
  return (
    <article
      className={clsx(variant && `${variant}__card`, 'place-card')}
      {...(onOverCard ? {onMouseEnter: onMouseEnter} : {})}
    >
      {
        offer.isPremium
          ? <div className="place-card__mark"><span>Premium</span></div>
          : null
      }
      <div
        className={clsx(
          variant && `${variant}__image-wrapper`,
          'place-card__image-wrapper'
        )}
      >
        <Link to={`${AppRoute.Offer}/${offer.id}`}>
          <img
            className="place-card__image"
            src={`${offer.previewImage}`}
            {...getImageSize(size)}
            alt={offer.title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <OfferFavoriteButton dimension={smallButtonFavoriteDimension} isOfferPageBookmark={false}
                               isFavorite={isFavorite}></OfferFavoriteButton>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRatingWidth(offer.rating)}`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${offer.id}`} state={'Привет, Вася'}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
