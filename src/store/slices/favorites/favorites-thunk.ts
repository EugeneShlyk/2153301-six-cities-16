import {createAppAsyncThunk} from '@store/hooks/create-app-async-thunk.ts';
import {OfferPreview, OfferWithImage} from '@customType/offer.ts';
import {FAVORITES_SLICE_NAME} from '@slices/slice-name.ts';
import {ENDPOINTS} from '@constants';
import {FavoritesChangePayload, FavoritesChangeProps, FavoritesStatus} from '@slices/favorites/types.ts';
import {adaptToOfferPreview} from '@utils/adapt-to-offer-preview.ts';
import {adaptToOffer} from '@utils/adapt-to-offer.ts';

export const fetchFavorites = createAppAsyncThunk<OfferPreview[], void>(
  `${FAVORITES_SLICE_NAME}/fetchFavorites`,
  async (_arg, {extra: api}) => {
    const response = await api.get<OfferPreview[]>(ENDPOINTS.FAVORITE);
    return response.data;
  }
);

export const changeFavorites = createAppAsyncThunk<FavoritesChangePayload, FavoritesChangeProps>(
  `${FAVORITES_SLICE_NAME}/changeFavorites`,
  async ({offerId, status}, {extra: api}) => {
    const {data} = await api.post<OfferWithImage>(`${ENDPOINTS.FAVORITE}/${offerId}/${status}`);
    const adaptedOfferPreview = adaptToOfferPreview(data);
    const adaptedOffer = adaptToOffer(data);
    const statusFavorite = Number(data.isFavorite) as FavoritesStatus;
    return {
      adaptedOfferPreview: adaptedOfferPreview,
      statusFavorite,
      adaptedOffer: adaptedOffer
    };
  }
);
