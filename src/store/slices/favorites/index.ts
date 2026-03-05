import {favoritesSlice} from '@slices/favorites/favorites-slice.ts';
import {changeFavorites, fetchFavorites} from '@slices/favorites/favorites-thunk.ts';

export const favoritesAction = {...favoritesSlice.actions, changeFavorites, fetchFavorites};
export const favoritesSelector = favoritesSlice.selectors;

export default favoritesSlice;
