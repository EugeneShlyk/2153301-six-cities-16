import {offerSlice} from '@slices/offer/offer-slice.ts';
import {fetchNearbyOffers, fetchOffer} from '@slices/offer/offer-thunk.ts';

export const offerAction = {...offerSlice.actions, fetchOffer, fetchNearbyOffers};
export const offerSelector = offerSlice.selectors;

export default offerSlice;
