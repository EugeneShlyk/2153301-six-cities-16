import {Offer} from '@customType/offer.ts';

type OfferOptionsT = {
  offer: Offer;
}

export default function OfferOptions({offer}: OfferOptionsT) {
  console.log(offer);
  return (
    <ul className="offer__inside-list">
      {offer.goods.map((good) => (
        <li className="offer__inside-item" key={good}>
          {good}
        </li>
      ))}
    </ul>
  )
}
