import {Offer, OfferPreview} from '@customType/offer.ts';
import {RequestStatus} from '@constants';

export type FavoritesState = {
  items: OfferPreview[];
  status: RequestStatus;
  length: number;
}

export enum FavoritesStatus {
  Added = 1,
  Removed = 0,
}

export type FavoritesChangeProps = {
  offerId: string;
  status: FavoritesStatus;
}

export type FavoritesChangePayload = {
  adaptedOfferPreview: OfferPreview;
  statusFavorite: FavoritesStatus;
  adaptedOffer: Offer;
}
