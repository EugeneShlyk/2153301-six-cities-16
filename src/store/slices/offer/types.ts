import {Offer, OfferPreview} from '@customType/offer.ts';

export interface IOfferState {
  info: Offer | null;
  nearby: OfferPreview[];
}
