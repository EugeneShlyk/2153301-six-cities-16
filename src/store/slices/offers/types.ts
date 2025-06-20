import {CitiesName} from '@constants';
import {OfferPreview} from '../../../types/offer';
import store from '../store'

export type OffersState = {
  currentCity: CitiesName;
  offers: OfferPreview[];
}
