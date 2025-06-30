import clsx from 'clsx';
import {Offer} from '@customType/offer.ts';

type OfferHostT = {
  offer: Offer;
}

export default function OfferHost({offer}: OfferHostT) {
  return (
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>
      <div className="offer__host-user user">
        <div
          className={clsx('offer__avatar-wrapper',
            'user__avatar-wrapper',
            {'offer__avatar-wrapper--pro': offer.host.isPro})}
        >
          <img
            className="offer__avatar user__avatar" src={offer?.host.avatarUrl} width="74" height="74"
            alt="Host avatar"
          />
        </div>
        <span
          className="offer__user-name"
        >
          {offer?.host.name}
        </span>
        {offer.host.isPro && (<span className="offer__user-status">Pro</span>)}
      </div>
      <div className="offer__description">
        {offer.description}
      </div>
    </div>
  );
}
