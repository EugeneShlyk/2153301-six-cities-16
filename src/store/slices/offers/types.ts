import {CitiesName, RequestStatus} from '@constants';
import {OfferPreview} from '@customType/offer.ts';

export type IOffersState = {
  currentCity: CitiesName;
  offers: OfferPreview[];
  requestStatus: RequestStatus;
}
