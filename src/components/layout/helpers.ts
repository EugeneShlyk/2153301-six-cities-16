import {AppRoute} from '@constants';
import {useAppSelector} from '@store/hooks/use-app-selector.ts';
import {offersSelector} from '@slices/offers';
import {favoritesSelector} from '@slices/favorites';
import {useMatch} from 'react-router-dom';

export const useGetLayoutState = (pathName: AppRoute) => {
  let pageClassName = '';
  let mainClassName = '';
  let shouldRenderUser = true;
  let shouldRenderFooter = false;
  let isDisabledLogo = false;
  let isRenderInputSearch = false;
  const offers = useAppSelector(offersSelector.offers);
  const favorites = useAppSelector(favoritesSelector.favorites);
  const isMatchOfferId = useMatch(AppRoute.OfferId);
  switch (pathName) {
    case AppRoute.Root:
      pageClassName = 'page--gray page--main';
      mainClassName = offers.length ? 'page__main--index' : 'page__main--index page__main--index-empty';
      isDisabledLogo = true;
      isRenderInputSearch = true;
      break;
    case AppRoute.Favorites:
      pageClassName = favorites.length ? '' : 'page--favorites-empty';
      mainClassName = favorites.length ? 'page__main--favorites' : 'page__main--favorites page__main--favorites-empty';
      shouldRenderFooter = true;
      isRenderInputSearch = true;
      break;
    case AppRoute.Login:
      shouldRenderUser = false;
      pageClassName = 'page--gray page--login';
      mainClassName = 'page__main--login';
      break;
  }
  if (isMatchOfferId) {
    mainClassName = 'page__main--offer';
  }

  return {
    pageClassName,
    mainClassName,
    shouldRenderUser,
    isDisabledLogo,
    shouldRenderFooter,
    isRenderInputSearch
  };
};
