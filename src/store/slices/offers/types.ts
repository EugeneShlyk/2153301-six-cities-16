import {CitiesName} from '@constants';
import {OfferPreview} from '../../../types/offer';

export type OffersState = {
  currentCity: CitiesName;
  offers: OfferPreview[];
}
