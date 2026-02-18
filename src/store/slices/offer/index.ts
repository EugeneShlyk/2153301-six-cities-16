import {offerSlice} from '@slices/offer/offer-slice.ts';
import {fetchOffer} from '@slices/offer/offer-thunk.ts';

export const offerAction = {...offerSlice.actions, fetchOfferAction: fetchOffer};
export const offerSelector = offerSlice.selectors;

export default offerSlice;
