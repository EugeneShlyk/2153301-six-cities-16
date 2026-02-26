import {AppRoute} from '@constants';
import {RootState} from '@store/index.ts';

export const useGetLayoutState = (pathName: AppRoute, state: RootState) => {
  let pageClassName = '';
  switch (pathName) {
    case AppRoute.Root:
      pageClassName = 'page--gray page--main';
      break;
  }
}
