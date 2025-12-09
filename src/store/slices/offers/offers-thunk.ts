import {OFFERS_SLICE_NAME} from '@slices/slice-name.ts';
import {OfferPreview} from '@customType/offer.ts';
import {createAppAsyncThunk} from '@store/hooks/createAppAsyncThunk.ts';

export const fetchOffersAction = createAppAsyncThunk<OfferPreview[], void>(
  `${OFFERS_SLICE_NAME}/fetchOffers`,
  async (_, {extra: api}) => {
    const {data} = await api.get<OfferPreview[]>('/offers');
    return data;
  });
