import {AppRoute} from '@constants';
import {OFFERS} from '@mocks/offers';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import MainPage from '@pages/main-page';
import FavoritePage from '@pages/favorites-page';
import ErrorPage from '@pages/error-page';
import LoginPage from '@pages/login-page/login-page';
import OfferPage from '@pages/offer-page/offer-page';
import {PublicRoute, PrivateRoute} from '@components/access-route';
import {TAuthorizationStatus} from '@customType/authorization-status.ts';
import {JSX} from 'react';
import Layout from '@components/layout';

const currentStatus: TAuthorizationStatus = 'UNKNOWN';

function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      element: <Layout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          element:
            <MainPage/>,
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
          path: `${AppRoute.Offer}/:offerId/`,
          element:
            <OfferPage/>
        },
        {
          path: AppRoute.Login,
          element:
            <PublicRoute status={currentStatus}>
              <LoginPage/>
            </PublicRoute>
        },
      ],
      // errorElement: <ErrorPage/>,
    }
  ]);

  return <RouterProvider router={router}/>;
}

export default App;

