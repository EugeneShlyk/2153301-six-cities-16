import {createAppAsyncThunk} from '@store/hooks/create-app-async-thunk.ts';
import {OfferPreview} from '@customType/offer.ts';

export const favoritesThunk = createAppAsyncThunk<OfferPreview[], void>
