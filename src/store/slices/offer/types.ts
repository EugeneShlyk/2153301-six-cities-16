import {Offer, OfferPreview} from '@customType/offer.ts';
import {RequestStatus} from '@constants';

export interface IOfferState {
  info: Offer | null;
  nearby: OfferPreview[];
  requestStatus: RequestStatus;
}
