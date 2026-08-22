import {CitiesName, RequestStatus, SortOption} from '@constants';
import {OfferPreview} from '@customType/offer.ts';

export interface OffersState {
  currentCity: CitiesName;
  offers: OfferPreview[];
  requestStatus: RequestStatus;
  activeSort: SortOption;
}
