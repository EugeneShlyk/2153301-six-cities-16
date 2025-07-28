import {createAsyncThunk} from '@reduxjs/toolkit';
import {OFFERS_SLICE_NAME} from '@slices/slice-name.ts';


export const fetchOffersAction = createAsyncThunk(`${OFFERS_SLICE_NAME}/fetchOffers`, async () => {
  const data = await fetch(`${OFFERS_SLICE_NAME}/offers`, {});
});
