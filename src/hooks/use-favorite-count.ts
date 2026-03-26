import {useActionCreators} from '@store/hooks/use-action-creator.ts';
import {favoritesAction, favoritesSelector} from '@slices/favorites';
import {useEffect} from 'react';
import {useAppSelector} from '@store/hooks/use-app-selector.ts';

export const useFavoriteCount = () => {
  const {fetchFavorites} = useActionCreators(favoritesAction);
  const count = useAppSelector(favoritesSelector.favorites).length;

  console.log(count);

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);
};
