import {JSX} from 'react';
import {getRatingWidth} from '@utils/get-rating-width.ts';
import clsx from 'clsx';
import {ExtraClassRating} from '@constants';

type RatingDisplayProps = {
  rating: number;
  extraClassName: ExtraClassRating;
}

export default function RatingDisplay({rating, extraClassName}: RatingDisplayProps): JSX.Element {
  const isOfferClass = extraClassName === ExtraClassRating.offer;
  return (
    <div className={clsx(`${extraClassName}__rating rating`)}>
      <div className={`${extraClassName}__stars rating__stars`}>
        <span style={{width: (getRatingWidth(rating))}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {isOfferClass && (<span className="offer__rating-value rating__value">{rating}</span>)}
    </div>
  );
}
