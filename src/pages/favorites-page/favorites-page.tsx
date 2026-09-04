import OfferCard from '@components/offer-card';
import FavoritesEmptyPage from '@pages/favorites-empty-page';
import {Link} from 'react-router-dom';
import {AppRoute, CitiesName} from '@constants';
import {useAppSelector} from '@store/hooks/use-app-selector.ts';
import {favoritesAction, favoritesSelector} from '@slices/favorites';
import {offersAction} from '@slices/offers';
import {useActionCreators} from '@store/hooks/use-action-creator.ts';
import {useEffect} from 'react';

function FavoritePage(): JSX.Element {
  const {fetchFavorites} = useActionCreators(favoritesAction);
  useEffect(() => {
    fetchFavorites();
  },[fetchFavorites]);
  const favorites = useAppSelector(favoritesSelector.favorites);
  const favoritesByLocation = Object.groupBy(favorites, (offer) => offer.city.name);
  const hasFavorites = Boolean(favorites?.length);

  const {changeCity} = useActionCreators(offersAction);

  return (
    <div className="page__favorites-container container">
      {hasFavorites ?
        (
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.entries(favoritesByLocation).map(
                ([location, groupedFavorites]) => (
                  <li className="favorites__locations-items" key={location}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <Link
                          className="locations__item-link"
                          to={`${AppRoute.Root}?city=${location}`}
                          onClick={() => {
                            changeCity(location as CitiesName);
                          }}
                        >
                          <span>{location}</span>
                        </Link>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {groupedFavorites.map((offer) =>
                        (
                          <OfferCard
                            key={offer.id}
                            offer={offer}
                            variant="favorites"
                            size="small"
                          />
                        )
                      )}
                    </div>
                  </li>
                )
              )}
            </ul>
          </section>
        )
        : <FavoritesEmptyPage/>}
    </div>
  );
}

export default FavoritePage;
