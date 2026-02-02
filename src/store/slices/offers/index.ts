import {offersSlice} from './offers-slice';
import {fetchOffersAction} from '@slices/offers/offers-thunk.ts';

export const offersAction = {...offersSlice.actions, fetchOffersAction};
export const offersSelector = offersSlice.selectors;

export default offersSlice;
