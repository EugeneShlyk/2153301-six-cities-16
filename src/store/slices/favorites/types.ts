import {OfferPreview, OfferWithImage} from '@customType/offer.ts';
import {RequestStatus} from '@constants';

export type FavoritesState = {
  items: OfferPreview[];
  status: RequestStatus;
}

export enum FavoritesStatus {
  Added = 1,
  Removed = 0,
}

export type FavoritesChangeProps = {
  offerId: string;
  status: FavoritesStatus;
}

export type FavoritesChangeResponse = {
  offer: OfferWithImage;
  status: FavoritesStatus;
}
