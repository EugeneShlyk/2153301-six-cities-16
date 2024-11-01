import {AppRoute, CityMap} from '@constants';
import {OFFERS} from '@mocks/offers';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import MainPage from '@pages/main-page';
import FavoritePage from '@pages/favorites-page';
import ProtectRoute from '@components/protect-route/protect-route';
import ErrorPage from '@pages/not-found-page';
import LoginPage from '@pages/login-page/login-page';
import OfferPage from '@pages/offer-page/offer-page';

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
            <ProtectRoute>
              <FavoritePage offers={OFFERS}/>
            </ProtectRoute>

        },
        {
          path: `${AppRoute.Offer}/:offerId`,
          element: <OfferPage/>
        },
        {
          path: AppRoute.Login,
          element:
            <ProtectRoute onlyUnAuth>
              <LoginPage/>
            </ProtectRoute>
        },
      ],
      errorElement: <ErrorPage/>,
    }
  ])

  return <RouterProvider router={router}/>
}

export default App;

