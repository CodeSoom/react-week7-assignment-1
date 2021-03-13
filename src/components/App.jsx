import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { setAccessToken } from '../redux/actions';
import { loadItem } from '../services/storage';
import {
  HomePage,
  LogInPage,
  AboutPage,
  RestaurantsPage,
  RestaurantPage,
  NotFoundPage,
} from '../pages';

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
          <Link to="/">헤더</Link>
        </h1>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LogInPage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/restaurants" component={RestaurantsPage} />
        <Route path="/restaurants/:id" component={RestaurantPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
