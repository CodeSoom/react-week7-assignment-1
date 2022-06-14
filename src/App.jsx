import { Switch, Route, Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import LoginPage from './pages/Login/LoginPage';
import RestaurantsPage from './pages/Restaurants/RestaurantsPage';
import RestaurantPage from './pages/Restaurant/RestaurantPage';
import NotFoundPage from './pages/NotFound/NotFoundPage';

import { setAccessToken } from './actions';

import { loadItem } from './services/storage';

export default function App() {
  const dispatch = useDispatch();

  const accessToken = loadItem('accessToken');
  if (accessToken) {
    dispatch(setAccessToken(accessToken));
  }

  return (
    <div>
      <header>
        <h1>
          <Link to="/">헤더 영역</Link>
        </h1>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/login" component={LoginPage} />
        <Route exact path="/restaurants" component={RestaurantsPage} />
        <Route path="/restaurants/:id" component={RestaurantPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
