import {OfferPreview} from '@customType/offer.ts';
import {CitiesName} from '@constants';
import {City} from '@customType/city.ts';
import {Offer} from '@customType/offer.ts';

export type OfferPageProps = {
  closestOffers: OfferPreview[];
  FullOffers: Offer[];
}

export type CityMapType = {
  [key: string]: City;
};

export type NoOffersProps = {
  currentLocation: CitiesName;
}
