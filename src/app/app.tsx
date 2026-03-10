import {AppRoute} from '@constants';
import {OFFERS} from '@mocks/offers';
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

function App(): JSX.Element {
  const {checkAuth} = useActionCreators(userAction);
  useEffect(() => {
    checkAuth();
  }, []);
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
              <FavoritePage offers={OFFERS}/>
            </ProtectRoute>
          // <PrivateRoute status={AuthorizationStatus.Auth}>
          //   <FavoritePage offers={OFFERS}/>
          // </PrivateRoute>
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

  return <RouterProvider router={router}/>;
}

export default App;

