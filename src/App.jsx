import {
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import LoginPage from './LoginPage/LoginPage';
import RestaurantsPage from './RestaurantsPage/RestaurantsPage';
import RestaurantPage from './RestaurantPage/RestaurantPage';
import NotFoundPage from './NotFoundPage';

import { setAccessToken } from './actions';

import { loadItem } from './services/storage';

export default function App() {
  const dispatch = useDispatch();

  const accessToken = loadItem('accessToken');

  if (accessToken) {
    dispatch(setAccessToken(accessToken));
  }

  return (
    <>
      <header>
        <h1>
          <Link to="/">헤더</Link>
        </h1>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/restaurants/:id" element={<RestaurantPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
