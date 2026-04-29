import {AppRoute, AuthorizationStatus, SPINNER_CLASSES} from '@constants';
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
import {useAppSelector} from '@store/hooks/use-app-selector.ts';
import Spinner from '@components/spinner';
import {userSelector} from '@slices/user';
import {offersAction, offersSelector} from '@slices/offers';

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
  const authStatus = useAppSelector(userSelector.authStatus);
  useEffect(() => {
    performance.mark('auth-start'); //checking
    checkAuth();
    if (window.location.pathname === '/') {
      fetchOffers();
    }
  }, [checkAuth]);

  useEffect(() => {
    // 2. Когда статус изменился и перестал быть Unknown
    if (authStatus !== AuthorizationStatus.Unknown) {
      performance.mark('auth-end');
      // 3. Считаем разницу
      performance.measure('Auth Duration', 'auth-start', 'auth-end');

      const measure = performance.getEntriesByName('Auth Duration')[0];
      console.log(`Авторизация заняла: ${measure.duration.toFixed(2)} ms`);
    }
  }, [authStatus]);

  // if (authStatus === AuthorizationStatus.Unknown) {
  //   return <Spinner extraClass={SPINNER_CLASSES.FULL_SCREEN}></Spinner>;
  // }

  return <RouterProvider router={router}/>;
}

export default App;

