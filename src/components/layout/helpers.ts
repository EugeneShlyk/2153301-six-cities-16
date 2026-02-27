import {AppRoute} from '@constants';
import {RootState} from '@store/index.ts';
import {useAppSelector} from '@store/hooks/use-app-selector.ts';
import {offersSelector} from '@slices/offers';

export const useGetLayoutState = (pathName: AppRoute, state: RootState) => {
  let pageClassName = '';
  let mainClassName = '';
  const offers = useAppSelector(offersSelector.offers);
  switch (pathName) {
    case AppRoute.Root:
      pageClassName = 'page--gray page--main';
      mainClassName = offers.length === 0 ? 'page__main--index' : 'page__main--index page__main--index-empty';
      break;
    case AppRoute.Favorites:
      pageClassName = '';
      break;
    case AppRoute.Login:
      pageClassName = 'page--gray page--login';
      break;
  }

};
