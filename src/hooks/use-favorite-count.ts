import {useActionCreators} from '@store/hooks/use-action-creator.ts';
import {favoritesAction, favoritesSelector} from '@slices/favorites';
import {useEffect} from 'react';
import {useAppSelector} from '@store/hooks/use-app-selector.ts';
import {RequestStatus} from '@constants';
import {getToken} from '@shared/token.ts';

export const useFavoriteCount = () => {
  const {fetchFavorites} = useActionCreators(favoritesAction);
  const count = useAppSelector(favoritesSelector.favoritesLength);
  const favoriteStatus = useAppSelector(favoritesSelector.favoritesStatus);
  const token = getToken();

  useEffect(() => {
    if (favoriteStatus === RequestStatus.Idle && token) {
      fetchFavorites();
    }
  }, [fetchFavorites, token, favoriteStatus]);

  return count;
};
