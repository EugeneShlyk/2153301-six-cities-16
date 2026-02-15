import {CitiesName, RequestStatus} from '@constants';
import {OfferPreview} from '@customType/offer.ts';

export interface IOffersState {
  currentCity: CitiesName;
  offers: OfferPreview[];
  requestStatus: RequestStatus;
}
