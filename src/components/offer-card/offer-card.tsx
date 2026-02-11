import {AppRoute} from '@constants';
import {OfferPreview} from '@customType/offer.ts';
import {getRatingWidth} from '@utils/get-rating-width.ts';
import clsx from 'clsx';
import {Link} from 'react-router-dom';
import FavoriteButton from '../favorite-button';
import {MouseEvent} from 'react';
import {capitalizeFirstLetter} from '@utils/capitalize-first-letter.ts';
import PremiumBadge from '@components/premium-badge';

type Size = 'small' | 'medium' | 'large';
type CardType = 'favorites' | 'cities' | 'near-places';
type OfferCardProps = {
  offer: OfferPreview;
  size: Size;
  variant?: CardType;
  onOverCard?: (cardId: string | null) => void;
};

const smallCardDimensions = {
  width: '150',
  height: '110'
};

const largeCardDimensions = {
  width: '260',
  height: '200'
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
  onOverCard,
}: OfferCardProps): JSX.Element {
  const onMouseEnterCard = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (onOverCard) {
      onOverCard(offer.id);
    }
  };
  const onMouseLeaveCard = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (onOverCard) {
      onOverCard(null);
    }
  };

  return (
    <article
      className={clsx(variant && `${variant}__card`, 'place-card')}
      {...(onOverCard ? {onMouseEnter: onMouseEnterCard} : {})}
      {...(onOverCard ? {onMouseLeave: onMouseLeaveCard} : {})}
    >
      <PremiumBadge isPremium={offer.isPremium} extraClassName="place-card__mark"/>
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
          <FavoriteButton
            size="small"
            offerId={offer.id}
            isFavorite={offer.isFavorite}
            bemBlock="place-card"
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRatingWidth(offer.rating)}`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(offer.type)}</p>
      </div>
    </article>
  );
}

export default OfferCard;
