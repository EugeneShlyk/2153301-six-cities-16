import OfferCard from '@components/offer-card';
import {OfferPreview} from '@customType/offer';
import FavoritesEmptyPage from '@pages/favorites-empty-page';
import {Link} from 'react-router-dom';
import {AppRoute} from '@constants';

type FavoritePageProps = {
  offers: OfferPreview[];
};

function getFavoritesByLocation(items: OfferPreview[]) {
  return items.reduce<{ [key: string]: OfferPreview[] }>((acc, current) => {
    const location = current.city.name;
    if (!(location in acc)) {
      acc[location] = [];
    }
    acc[location].push(current);

    return acc;
  }, {});
}

function FavoritePage({offers}: FavoritePageProps): JSX.Element {
  const favorites = offers.filter((item) => item.isFavorite);
  const favoritesByLocation = getFavoritesByLocation(favorites);
  const hasFavorites = Boolean(favorites?.length);

  return (
    <div className="page">
      <main className="page__main page__main--favorites">
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
                            <Link className="locations__item-link" to={AppRoute.Root}>
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
      </main>
    </div>
  );

}

export default FavoritePage;
