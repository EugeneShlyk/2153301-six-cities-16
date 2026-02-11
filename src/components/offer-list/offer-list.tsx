import clsx from 'clsx';
import {OfferPreview} from '@customType/offer.ts';
import React from 'react';

type OfferListType = {
  dataOffers: OfferPreview[];
  extraClass?: string;
  children: (data: OfferPreview) => React.ReactNode;
}

function OfferList({dataOffers, extraClass, children}: OfferListType) {
  return (
    <div className={clsx('places__list', extraClass && extraClass)}>
      {dataOffers.map((dataOffer) => children(dataOffer))}
    </div>
  );
}

export default OfferList;
