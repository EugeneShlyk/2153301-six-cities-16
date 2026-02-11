import {OFFERS_SLICE_NAME} from '@slices/slice-name.ts';
import {OfferPreview} from '@customType/offer.ts';
import {createAppAsyncThunk} from '@store/hooks/create-app-async-thunk.ts';
import {ENDPOINTS} from '@constants';
import {AxiosInstance} from 'axios';

export const fetchOffersAction = createAppAsyncThunk<OfferPreview[], void, { extra: AxiosInstance }>(
  `${OFFERS_SLICE_NAME}/fetchOffers`,
  async (_, {extra: api, }) => {
    const {data} = await api.get<OfferPreview[]>(ENDPOINTS.OFFER);
    return data;
  });
