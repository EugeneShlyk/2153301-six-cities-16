import {AppRoute} from '@constants';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import MainPage from '@pages/main-page';
import FavoritePage from '@pages/favorites-page';
import ErrorPage from '@pages/error-page';
import LoginPage from '@pages/login-page/login-page';
import OfferPage from '@pages/offer-page/offer-page';
import {JSX, useEffect} from 'react';
import Layout from '@components/layout';
import ProtectRoute from '@components/protect-route';
import {useActionCreators} from '@store/hooks/use-action-creator.ts';
import {userAction} from '@slices/user';
import {offersAction} from '@slices/offers';

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
          <ProtectRoute>
            <FavoritePage/>
          </ProtectRoute>
      },
      {
        path: AppRoute.OfferId,
        element:
          <OfferPage/>
      },
      {
        path: AppRoute.Login,
        element:
          <ProtectRoute onlyUnAuth>
            <LoginPage/>
          </ProtectRoute>
      },
    ],
  }
]);

function App(): JSX.Element {
  const {checkAuth} = useActionCreators(userAction);
  const {fetchOffers} = useActionCreators(offersAction);
  useEffect(() => {
    checkAuth();
    if (window.location.pathname === '/') {
      fetchOffers();
    }
  }, [checkAuth, fetchOffers]);

  return <RouterProvider router={router}/>;
}

export default App;

