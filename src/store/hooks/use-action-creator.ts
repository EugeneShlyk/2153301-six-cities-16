import {ActionCreatorsMapObject, AsyncThunk, bindActionCreators} from '@reduxjs/toolkit';
import {useMemo} from 'react';
import {useAppDispatch} from '@store/hooks/use-app-dispatch.ts';

type BoundAsyncThunk<Thunk extends AsyncThunk<unknown, unknown, object>> =
  (...args: Parameters<Thunk>) => ReturnType<ReturnType<Thunk>>;

type BoundActions<Actions extends ActionCreatorsMapObject> = {
  [key in keyof Actions]: Actions[key] extends AsyncThunk<unknown, unknown, object> ? BoundAsyncThunk<Actions[key]> : Actions[key];
};

export const useActionCreators = <Actions extends ActionCreatorsMapObject>(
  actions: Actions): BoundActions<Actions> => {
  const dispatch = useAppDispatch();

  return useMemo(() => bindActionCreators(actions, dispatch), [actions, dispatch]);
};
