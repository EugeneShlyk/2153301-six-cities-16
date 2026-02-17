import {offerSlice} from '@slices/offer/offer-slice.ts';
import {fetchOfferAction} from '@slices/offer/offer-thunk.ts';

export const offerAction = {...offerSlice.actions, fetchOfferAction};
export const offerSelector = offerSlice.selectors;

export default offerSlice;
