import {JSX} from 'react';
import {getRatingWidth} from '@utils/get-rating-width.ts';
import {Offer} from '@customType/offer.ts';

type RatingDisplayProps = {
  offer: Offer;
}

export default function RatingDisplay({offer}: RatingDisplayProps): JSX.Element {
  return (
    <div className="offer__rating rating">
      <div className="offer__stars rating__stars">
        <span style={{width: (getRatingWidth(offer?.rating))}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="offer__rating-value rating__value">{offer?.rating}</span>
    </div>
  );
}
