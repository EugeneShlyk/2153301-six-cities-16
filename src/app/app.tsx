import {AppRoute, AuthorizationStatus} from '@constants';
import {OFFERS} from '@mocks/offers';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import MainPage from '@pages/main-page';
import FavoritePage from '@pages/favorites-page';
import ErrorPage from '@pages/error-page';
import LoginPage from '@pages/login-page/login-page';
import OfferPage from '@pages/offer-page/offer-page';
import {PrivateRoute, PublicRoute} from '@components/access-route';
import {JSX} from 'react';
import Layout from '@components/layout';

const currentStatus = AuthorizationStatus.Unknown;

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
            <PrivateRoute status={AuthorizationStatus.Auth}>
              <FavoritePage offers={OFFERS}/>
            </PrivateRoute>
        },
        {
          path: AppRoute.OfferId,
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
    }
  ]);

  return <RouterProvider router={router}/>;
}

export default App;

