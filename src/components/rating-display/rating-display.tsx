import {JSX} from 'react';
import {getRatingWidth} from '@utils/get-rating-width.ts';
import {Offer} from '@customType/offer.ts';
import clsx from 'clsx';

type RatingDisplayProps = {
  offer: Offer;
  extraClassName: string;
}

export default function RatingDisplay({offer, extraClassName}: RatingDisplayProps): JSX.Element {
  return (
    <div className={clsx(`${extraClassName}__rating rating`)}>
      <div className={`${extraClassName}__stars rating__stars`}>
        <span style={{width: (getRatingWidth(offer?.rating))}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="offer__rating-value rating__value">{offer?.rating}</span>
    </div>
  );
}
