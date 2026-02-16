import {createAppAsyncThunk} from '@store/hooks/create-app-async-thunk.ts';
import {Offer} from '@customType/offer.ts';
import {AxiosInstance} from 'axios';
import {OFFERS_SLICE_NAME} from '@slices/slice-name.ts';
import {ENDPOINTS} from '@constants';

export const fetchOfferAction = createAppAsyncThunk<Offer, string, { extra: AxiosInstance }>(
  `${OFFERS_SLICE_NAME}/fetchOffer`,
  async (offerId, {extra: api,}) => {
    const {data} = await api.get<Offer>(`${ENDPOINTS.OFFERS}/${offerId}`);
    return data;
  });

