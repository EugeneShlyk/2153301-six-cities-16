import {createAppAsyncThunk} from '@store/hooks/create-app-async-thunk.ts';
import {Offer} from '@customType/offer.ts';
import {AxiosInstance} from 'axios';
import {OFFERS_SLICE_NAME} from '@slices/slice-name.ts';

export const fetchOfferThunk = createAppAsyncThunk<Offer, void, { extra: AxiosInstance }>(
`${OFFERS_SLICE_NAME}/fetchOffer`,
  async () => {

  }
)
=>
{

}
