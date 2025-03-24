import {AppRoute, CityMap} from '@constants';
import {OFFERS} from '@mocks/offers';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import MainPage from '@pages/main-page';
import FavoritePage from '@pages/favorites-page';
import ErrorPage from '@pages/error-page';
import LoginPage from '@pages/login-page/login-page';
import OfferPage from '@pages/offer-page/offer-page';
import {PublicRoute, PrivateRoute} from '@components/access-route';
import {AuthorizationStatus} from '@constants';

const currentStatus: AuthorizationStatus = 'UNKNOWN';

function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      children: [
        {
          element: <MainPage offers={OFFERS} locations={CityMap}/>,
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
          element: <OfferPage/>
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

