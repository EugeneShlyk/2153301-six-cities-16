import {offersSlice} from './offers-slice';
import {fetchOffers} from '@slices/offers/offers-thunk.ts';

export const offersAction = {...offersSlice.actions, fetchOffers: fetchOffers};
export const offersSelector = offersSlice.selectors;

export default offersSlice;
