import {AppRoute, CityMap} from '@constants';
import {OFFERS} from '@mocks/offers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '@pages/main-page';

function App():JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage offers={OFFERS} locations={CityMap} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
