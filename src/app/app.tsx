import {AppRoute, CityMap} from '@constants';
import {OFFERS} from '@mocks/offers';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import MainPage from '@pages/main-page';
import FavoritePage from '@pages/favorites-page';
import ErrorPage from '@pages/error-page';
import LoginPage from '@pages/login-page/login-page';
import OfferPage from '@pages/offer-page/offer-page';
import {PublicRoute, PrivateRoute} from '@components/access-route';
import {AuthorizationStatus} from '@customType/authorization-status.ts';
import {useState} from 'react';
import {City} from '@customType/city.ts';
import {REVIEWS} from '@mocks/reviews.ts';
import {DEFAULT_CITY} from '@constants';
import {OFFERS_FOR_OFFER_PAGE} from '@mocks/offers-for-offer-page.ts';
import {virtualFullOffers} from '@mocks/virtual-full-offers.ts';

const currentStatus: AuthorizationStatus = 'UNKNOWN';

function App(): JSX.Element {
  const [currentCity, setCurrentCity] = useState<City>(DEFAULT_CITY);
  const router = createBrowserRouter([
    {
      children: [
        {
          element:
            <MainPage
              offers={OFFERS} locations={CityMap} currentCity={currentCity} setCurrentCity={setCurrentCity}
            />,
          index: true,
        },
        {
          path: AppRoute.Favorites,
          element:
            <PrivateRoute status={'AUTH'}>
              <FavoritePage offers={OFFERS}/>
            </PrivateRoute>
        },
        {
          path: `${AppRoute.Offer}/:offerId`,
          element:
            <OfferPage
              reviews={REVIEWS} currentCity={currentCity} closestOffers={OFFERS_FOR_OFFER_PAGE}
              FullOffers={virtualFullOffers}
            />
        },
        {
          path: AppRoute.Login,
          element:
            <PublicRoute status={currentStatus}>
              <LoginPage/>
            </PublicRoute>
        },
      ],
      errorElement: <ErrorPage/>,
    }
  ]);

  return <RouterProvider router={router}/>;
}

export default App;

