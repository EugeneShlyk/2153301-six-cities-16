import {createAppAsyncThunk} from '@store/hooks/create-app-async-thunk.ts';
import {OfferPreview, OfferWithImage} from '@customType/offer.ts';
import {FAVORITES_SLICE_NAME} from '@slices/slice-name.ts';
import {ENDPOINTS} from '@constants';
import {FavoritesChangeResponse, FavoritesChangeProps} from '@slices/favorites/types.ts';
import {adaptToPreview} from '@utils/adapt-to-preview.ts';

export const fetchFavorites = createAppAsyncThunk<OfferPreview[], void>(
  `${FAVORITES_SLICE_NAME}/fetchFavorites`,
  async (_arg, {extra: api}) => {
    const response = await api.get<OfferPreview[]>(ENDPOINTS.FAVORITE);
    return response.data;
  }
);

export const changeFavorites = createAppAsyncThunk<FavoritesChangeResponse, FavoritesChangeProps>(
  `${FAVORITES_SLICE_NAME}/changeFavorites`,
  async ({offerId, status}, {extra: api}) => {
    const {data} = await api.post<OfferWithImage>(`${ENDPOINTS.FAVORITE}/${offerId}/${status}`);
    const adaptedOffer = adaptToPreview(data);
    return {offer: adaptedOffer, status};
  }
);
