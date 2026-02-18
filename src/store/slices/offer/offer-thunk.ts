import {createAppAsyncThunk} from '@store/hooks/create-app-async-thunk.ts';
import {Offer, OfferPreview} from '@customType/offer.ts';
import {OFFER_SLICE_NAME} from '@slices/slice-name.ts';
import {ENDPOINTS} from '@constants';

export const fetchOffer = createAppAsyncThunk<Offer, string>(
  `${OFFER_SLICE_NAME}/fetchOffer`,
  async (offerId, {extra: api,}) => {
    const {data} = await api.get<Offer>(`${ENDPOINTS.OFFERS}/${offerId}`);
    return data;
  });

export const fetchNearbyOffers = createAppAsyncThunk<OfferPreview[], string>(
  `${OFFER_SLICE_NAME}/fetchNearbyOffers`,
  async (offerId, {extra: api}) => {
    const {data} = await api.get<OfferPreview[]>(`${ENDPOINTS.OFFERS}/${offerId}/nearby`);
    return data;
  }
);
