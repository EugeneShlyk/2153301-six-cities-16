import {createAppAsyncThunk} from '@store/hooks/create-app-async-thunk.ts';
import {Offer, OfferPreview} from '@customType/offer.ts';
import {FAVORITES_SLICE_NAME} from '@slices/slice-name.ts';
import {ENDPOINTS} from '@constants';

export const fetchFavorites = createAppAsyncThunk<OfferPreview[], void>(
  `${FAVORITES_SLICE_NAME}/fetchFavorites`,
  async (_arg, {extra: api}) => {
    const response = await api.get<OfferPreview[]>(ENDPOINTS.FAVORITE);

    return response.data;
  }
);

// export const changeFavorites = createAppAsyncThunk<Offer, string>(
//   `${FAVORITES_SLICE_NAME}/changeFavorites`,
//   async ({offerId, status}, {extra: api}) => {
//     const response = await api.post<Offer>(`${ENDPOINTS.FAVORITE}/${offerId}/${status}`);
//     return response.data;
//   }
// );
