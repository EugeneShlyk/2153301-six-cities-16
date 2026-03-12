import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import type {AppDispatch, RootState} from '@store/index.ts';

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  extra: AxiosInstance;
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: string;
}>();
