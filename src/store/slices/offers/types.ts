import {CitiesName} from '@constants';
import {OfferPreview} from '@customType/offer.ts';

export type OffersStateT = {
  currentCity: CitiesName;
  offers: OfferPreview[];
}
