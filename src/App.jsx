import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { useEffect } from 'react';

import { loadItem } from './storage';

import { setAccessToken } from './actions';

import HomePage from './HomePage';
import LoginPage from './pages/login/LoginPage';
import AboutPage from './AboutPage';
import RestaurantsPage from './RestaurantsPage';
import RestaurantPage from './RestaurantPage';
import NotFoundPage from './NotFoundPage';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = loadItem('accessToken');

    if (accessToken !== null) {
      dispatch(setAccessToken(accessToken));
    }
  }, []);

  return (
    <div>
      <header>
        <h1>
          <Link to="/">헤더</Link>
        </h1>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/restaurants" component={RestaurantsPage} />
        <Route path="/restaurants/:id" component={RestaurantPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
