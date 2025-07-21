import {Offer} from '@customType/offer.ts';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {OFFERS_SLICE_NAME} from '@slices/slice-name.ts';

type OfferState = {
  info: Offer | null;
  nearby: Offer[];
}


